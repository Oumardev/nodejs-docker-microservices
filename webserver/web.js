// app.js
const express = require('express');
const ejs = require('ejs');
require('dotenv').config()

const fs = require('fs');

const app = express();
const port = 3002;

function rassemblerWorkers(txt) {
    const regex = /(\d+ Jobs by worker_\d+)/g;
    const matches = txt.match(regex);

    // Retourner le tableau des correspondances
    return matches;
}

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the HTML page
app.get('/', async (req, res) => {

    const FILE_PATH = process.env.ENVIRONNEMENT==='dev' ? process.env.DEV_FILEPATH : process.env.PROD_FILEPATH

    try {
        fs.readFile(`${FILE_PATH}`, 'utf-8', (err, data) => {
            // Render the HTML page
            res.render('index', { data: rassemblerWorkers(data) });
        });

    } catch (error) {
        console.error('Error reading files:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
