const mongoose = require('mongoose');
const config = require('../../config');

const Connect = async() => {
    try {
        //mongodb cloud connection set up
        const con = await mongoose.connect(config.MONGO_URI, {

                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true

            }) //calling connect method of mongoose; config.js contains the URI

        console.log(`MongoDB Connected: ${con.connection.host}`);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect;