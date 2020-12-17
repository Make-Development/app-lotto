
const auth = require('../models/firebase');

exports.signup = (req, res) => {

    // const data = auth.view("/auth")
    const data = {
        username: req.body.username,
        email: req.body.email,

    }
    const ref = auth.view("/auth")

    ref.once("value", function (snapshot) {
        //     var data = snapshot.val();   //Data is in JSON format.
        //     return data
        // });
        res.status(200).send(snapshot.val());
    });
};

exports.show = (req, res) => {

    const ref = auth.view("/auth/-MOlg8oOSUTTnkeSdahN")

    ref.once("value", function (snapshot) {
        // res.status(200).send(snapshot.val());
        var ss = snapshot.val();
        console.log(ss);
        res.render('pages/index', { name: "Lotto.", data: JSON.stringify(ss) });
    });
};