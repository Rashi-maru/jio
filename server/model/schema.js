const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    filename: {
        type: String,
        unique: true,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    imageBase64: {
        type: String,
        required: true
    }
})


// const detailsSchema = new mongoose.Schema({
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
// })


module.exports = UploadModel = mongoose.model('uploads', uploadSchema)
    // module.exports = UploadDetailsModel = mongoose.model('details', detailsSchema)
