

const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app/assets')));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

// - Auth
require('./app/routes/auth.routes')(app);

// app.get('/', function (req, res) {
//     res.render('pages/index', { name: "Lotto." });
// });

// var db = firebase.database();
// var ref = db.ref("/Lotto");


// ref.once("value", function (snapshot) {
//     var data = snapshot.val();   //Data is in JSON format.
//     console.log(data);
// });

app.listen(PORT, () => {
    console.log('sever', PORT);
})


