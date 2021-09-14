const express = require('express')
const app = express();

const hbs = require('express-handlebars');
const path = require('path');
app.use(express.json());

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

//connect mongodb database
require('./server/database/database')();

//set up view engine
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views',
    layoutsDir: path.join(__dirname, 'views'),
    partialDir: path.join(__dirname, 'views/partials')
}))

//calling routes
app.use('/', require('./server/router/router'));

// var detailsSchema = new mongoose.Schema({
//     personName: {
//         type: String,
//         required: true
//     },
//     contentKind: {
//         type: String,
//         description: {
//             type: String,
//             possibleValues: ['Article', 'Featured Project Report', 'Project Brief', 'Data Drishti', 'Product(Self Service Tool)']
//         },
//         required: true
//     },
//     heading: {
//         type: String,
//         required: true
//     },
//     authors: {
//         type: String,
//         required: true
//     },
//     projectDescription: {
//         type: String,
//         required: true
//     },
//     businessValue: {
//         type: String,
//         possibleValues: ['Contribution to Revenue', 'Increased Effectiveness or Productivity ', 'Improved Resilience or Reliability ', 'Cost Reduction or Avoidance ', 'Improved uality / Safety / Compliance ', 'Risk Mitigation ', 'User Satisfaction ', 'Not Applicable '],
//         required: true
//     },
//     businessFunction: {
//         type: String,
//         businessFunctions: ['Marketing', 'Operations ', 'Finance ', 'HR ', 'Security ', 'Others '],
//         required: true
//     },
//     businessTag: {
//         type: String,
//         businessTags: ['R&M', 'JioBP ', 'PetChem ', 'MFG ', 'P&C ', 'FC&A ', 'SCM ', 'RPMG ', 'R&D ', 'IT ', 'Corporate Security ', 'Corporate Services ', 'E&P ', 'Retail ', 'Others '],
//         required: true
//     },
//     technology: {
//         type: String,
//         tagTechnology: ['Image & Video Analytics ', 'Video & Video Analytics ', 'Intelligent Automation ', 'Optimization & Simulation ', 'Visualization ', 'Machine Learning / Deep Learning & Statistics ', 'Others '],
//         required: true
//     },
//     otherTags: {
//         type: String,
//         required: false
//     },
//     result: {
//         type: String,
//         required: true
//     },
//     businessContext: {
//         type: String,
//         required: true
//     },
//     methodology: {
//         type: String,
//         required: true
//     },
//     usage: {
//         type: String,
//         required: true
//     },
//     bsValue: {
//         type: String,
//         required: true
//     }
// });

// var UploadDetailsModel = mongoose.model("UploadDetailsModel", detailsSchema);


// app.post("/uploaddetails", (req, res) => {
//     var myData = new UploadDetailsModel(req.body);
//     myData.save()
//         .then(item => {
//             res.send("item saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });
// });

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log(`Server is started on http://localhost:3000 `));
