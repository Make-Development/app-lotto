const functions = require('firebase-functions');
const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/app/assets')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/view/login.html'));
});

app.get('/auth', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/view/auth.html'));
});

require('./app/routes/index.routes')(app);

app.listen(PORT, () => {
    console.log('sever', PORT);
})

exports.api = functions.https.onRequest(app);

