// app.js
const express = require('express');
const ejs = require('ejs');

const fs = require('fs');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the HTML page
app.get('/', async (req, res) => {

    try {
        await fs.readFile('./worker1/worker1.txt', 'utf-8', async (err_1, worker_1) => {
            await fs.readFile('./worker2/worker2.txt', 'utf-8', (err, worker_2) => {
                const data = { worker_1, worker_2 };

                // Render the HTML page
                res.render('index', data);
            });
        });

    } catch (error) {
        console.error('Error reading files:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
