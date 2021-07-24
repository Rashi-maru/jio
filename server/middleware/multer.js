const multer = require('multer');

//set storage- the way you want to store your images


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads') //cb is callback, null is if user uploads wrong image and uploads as second argument is uploads folder

    },
    filename: function(req, file, cb) {
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.')); //will return extension of file
        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})



module.exports = store = multer({ storage: storage }) //module.exports store variable which has multer({storage: storage})