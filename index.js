const app = require('./app.js');
const fs = require('fs');
const XLSX = require('xlsx');
const axios = require('axios');
const db = require('./config/db.js');
const UserModel = require('./model/user.model.js');
const JobPreferencesModel = require("./model/job_preferences.model");
const JobPostModel =require("./model/job_post.model.js")

const port = 4000;


app.get('/',(req,res)=>{
     res.send("Hello World!!!")
})

app.listen(port,()=>{
     console.log(`Server Listening on Port http://localhost:${port}`);
})


// async function exportToCSV() {
//     try {
//         // Fetch all users from the database
//         const AllUserPreferences = await JobPreferencesModel.find();
//     console.log(AllUserPreferences)
//         // Write data to CSV file
//         const ws = fs.createWriteStream('UserJobPreferences.csv');
//         fastcsv
//             .write(AllUserPreferences, { headers: true })
//             .pipe(ws);

//         console.log('CSV file created/updated successfully');
//     } catch (error) {
//         console.error('Error exporting to CSV:', error);
//     }
// }

// // Export to CSV initially
// exportToCSV();

// // Set up a timer to export to CSV every 2 minutes
// setInterval(exportToCSV, 2 * 60 * 1000);

async function exportToXLSX() {
    try {
        // Fetch all user preferences from the database and exclude _id and __v fields
        const AllUserPreferences = await JobPreferencesModel.find().select('-_id -__v').lean();
        console.log(AllUserPreferences);
        // Define custom headers
        const headers = [
            'userId',
            'skills',
            'jobTitles',
            'experienceLevel',
            'locations'
        ];
        // Convert the data to XLSX format with custom headers
        const data = AllUserPreferences.map(user => ({
            userId: user.userId,
            skills: user.skills.join(', '), // Convert skills array to string
            jobTitles: user.jobTitles.join(', '), // Convert jobTitles array to string
            experienceLevel: user.experienceLevel,
            locations: user.locations.join(', ') // Convert locations array to string
        }));
        // const workSheet = XLSX.utils.json_to_sheet(data, { header: headers });
        // const workBook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet 1');
        console.log(data);
        const jsonData = JSON.stringify(data);
        console.log(jsonData);
    //     const jsonData = [
    // {
    //     userId: 1004,
    //     skills: 'ayudh, Node.js, Express.js',
    //     jobTitles: 'Software Engineer, Full Stack Developer',
    //     experienceLevel: 'Intermediate',
    //     locations: 'New York, San Francisco'
    // },
    // {
    //     userId: 1820,
    //     skills: 'ayudh, Node.js, Express.js',
    //     jobTitles: 'Software Engineer, Full Stack Developer',
    //     experienceLevel: 'Intermediate',
    //     locations: 'New York, San Francisco'
    // }
// ];
        
        // await axios.post('http://localhost:8000/user_recommendations/',{body:{jsonData}})
        
        await axios.post('Uvicorn running on http://0.0.0.0:6000/option3/', { body: jsonData });
        // Write the XLSX file
        // XLSX.writeFile(workBook, './temp/sample.xlsx');

        console.log('XLSX file created/updated successfully');
    } catch (error) {
        console.error('Error exporting to XLSX:', error);
    } 
}        
// setInterval(exportToXLSX, 10000);
// exportToXLSX();