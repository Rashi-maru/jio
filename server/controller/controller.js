const UploadModel = require('../model/schema');
const fs = require('fs'); //inbuilt therefore no need to download




exports.home = async(req, res) => {
        const all_images = await UploadModel.find() //returns all data from mongodb
        res.render('main', { images: all_images });
    } //creating a home controller function and exporting it at the same time



exports.uploads = (req, res, next) => { //call this controller in router.js
    const files = req.files; //using req object you can get files. In middleware, post method; a property called files created which can be accessed using req object here 

    if (!files) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error) //return error with this function
    }

    //convert images into base64 encoding
    let imgArray = files.map((file) => { //array will return an array of base64 images
        let img = fs.readFileSync(file.path)
        return encode_image = img.toString('base64')
    })


    let result = imgArray.map((src, index) => {

        //create object to store data in the collection
        let finalImg = {
            filename: files[index].originalname,
            contentType: files[index].mimetype,
            imageBase64: src
        }

        let newUpload = new UploadModel(finalImg);
        return newUpload
            .save() //to save in mongodb db
            .then(() => {
                return { msg: `
                        $ { files[index].originalname }
                        Uploaded Successfully!` }
            })

        .catch(error => {
            if (error) {
                if (error.name == 'MongoError' && error.code == 11000) {
                    return Promise.reject({
                        error: `
                        Duplicate $ { files[index].originalname }.File Already exists!`
                    });
                }
                return Promise.reject({ error: error.message || `
                        Cannot Upload $ { files[index].originalname }
                        Something Missing ` })
            }
        })
    });

    Promise.all(result)
        .then(msg => {
            // res.json(msg)
            res.redirect('/')
        })
        .catch(err => {
            res.json(err)
        });
}











// const UploadDetailsModel = require('../model/schema');

// exports.details = (req, res, next) => {

//     //create object to store data in the collection
//     const finalDet = {
//         personName: req.personName,
//         contentKind: req.contentKind,
//         heading: req.heading,
//         authors: req.authors,
//         projectDescription: req.projectDescription,
//         businessValue: req.businessValue,
//         businessFunction: req.businessFunction,
//         businessTag: req.businessTag,
//         technology: req.technology,
//         otherTags: req.otherTags,
//         result: req.result,
//         businessContext: req.businessContext,
//         methodology: req.methodology,
//         usage: req.usage,
//         bsValue: req.businessValue
//     }


//     const newDetUpload = new UploadDetailsModel(finalDet);
//     return newDetUpload
//         .save() //to save in mongodb db
//         .then(resul => {
//             console.log(resul)
//             res.send("items saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");

//         });


// }
