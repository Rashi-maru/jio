//creating instance of route
const route = require('express').Router() //Router is a method of express to create different routes in this route file
const controller = require('../controller/controller');
const store = require('../middleware/multer')

// routes
route.get('/', controller.home);
//in above code, only one res(response) if there are 50-100 responses, code will look ugly therefore controllers- will contain callback function; in above code callback function is (req, res)

route.post('/uploadmultiple', store.array('images', 12), controller.uploads); //index.hbs had form action="/uploadmultiple"
//in above LOC, second argument is 12 meaning at once, user can upload only 12 images


module.exports = route; //export since we will use it in server.js file