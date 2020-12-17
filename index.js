

const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/app/assets')));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/view/');


app.get('/', function(req, res){
    res.render('login.html');
});


require('./app/routes/auth.routes')(app);

// app.get('/', (req, res) => {
//     res.render(path.join(__dirname + '/view/login.html'), { name: "Lotto" });
// });

// app.get('/auth', (req, res, next) => {
//     res.sendFile(path.join(__dirname + '/view/auth.html'));
// });


// require('./app/routes/index.routes')(app);
// app.get('/', (req, res) => {
//     res.json({result:"ok",data:[1,2,3,4,5]});
// });

app.listen(PORT, () => {
    console.log('sever', PORT);
})

//exports.api = functions.https.onRequest(app);

