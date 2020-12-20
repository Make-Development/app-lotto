
const auth = require('../models/firebase');

var jwt = require("jsonwebtoken");
exports.signup = (req, res) => {

    // const data = auth.view("/auth")
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

  

    // const ref = auth.view("/auth")

    // ref.once("value", function (snapshot) {
    //     //     var data = snapshot.val();   //Data is in JSON format.
    //     //     return data
    //     // });
    //     res.status(200).send(snapshot.val());
    // });
};

exports.show = async (req, res) => {
    // const wordsSnapshot = await auth.get("/auth").once('value');
    // console.log(wordsSnapshot);

    // const ref = auth.get("/auth")
    // ref.push({
    //     id: 22,
    //     name: "Jane Doe",
    //     email: "jane@doe.com",
    //     website: "https://jane.foo.bar"
    // });
    // var reads = [];
    // const s = auth.get("/auth/-MOqa9YH0Pi16-5HNVjg").once("value", function (snapshot) {
    //     reads = JSON.stringify(snapshot.val())
    //     return Promise.all(reads);

    //     // var ss = snapshot.val();
    //     // console.log(ss);
    //     // res.render('pages/index', { name: "Lotto.", data: JSON.stringify(ss) });
    // });
    // console.log(JSON.stringify(s))
    // res.status(200).send(s);
};