const fs = require('fs');
require('dotenv').config()

// Specify the file path
const filePath = process.env.ENVIRONNEMENT==='dev' ? process.env.DEV_FILEPATH : process.env.PROD_FILEPATH;

var init = 0
// Function to read, modify, and write the file
function processFile() {
    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        init += 10
        // Edit the file content (for example, increment by 100)
        const modifiedData = `${data} ${init} Jobs by worker_2`;

        // Write the modified content back to the file
        fs.writeFile(filePath, `${modifiedData}\n`, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }

            console.log('File successfully edited!');
        });
    });
}

setInterval(processFile, 10000);