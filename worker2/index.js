const fs = require('fs');

// Specify the file path
const filePath = 'worker2.txt';

// Function to read, modify, and write the file
function processFile() {
    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Edit the file content (for example, increment by 10)
        const modifiedData = Number(data) + 10;

        // Write the modified content back to the file
        fs.writeFile(filePath, String(modifiedData), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }

            console.log('File successfully edited!');
        });
    });
}

setInterval(processFile, 10000);