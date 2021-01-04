const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
app.use(serveStatic('build'));
app.use(bodyParser.json());

app.get('/results', (req, res) => {
    const rawJson = fs.readFileSync(path.join(__dirname, './results.json'));
    const { results } = JSON.parse(rawJson);
    try {
        res.json({ results: results.slice(0, 10) });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})

app.post('/results', (req, res) => {
    const sortedResults = req.body.results.sort((a, b) => b.score - a.score);

    fs.writeFile(path.join(__dirname, './results.json'), JSON.stringify({ results: sortedResults}), (err) => {
        if (err) {
            res.status(400).send('Result is not saved');
            return;
        }
        res.json({ results: sortedResults.slice(0, 10) });
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/404.html'));
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})