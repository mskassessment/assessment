const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use('/static', express.static('dist'))

app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }))

app.get('/interventions', (req, res) => {
    const searchTerm = encodeURIComponent(req.query.name)
    request(`https://clinicaltrialsapi.cancer.gov/v1/interventions?size=25&name=${searchTerm}`, { json: true }, (err, apiResponse, body) => {
        res.json({ apiResults: body })
    });
})

