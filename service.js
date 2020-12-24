

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/app/assets')));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

require('./app/routes/page.routes')(app);
require('./app/routes/auth.routes')(app);

app.listen(PORT, () => {
    console.log('sever', PORT);
})


