const key = require('../config/key.js');
const jwt = require("jsonwebtoken");
const base = require('../models/firebase');


exports.load = (req, res) => {


    let client = jwt.verify(req.cookies.token, key.jwt.secret);

    const query = base.query("/auth")
        .where("clientid", client.clientid)

    query.execute().then((result) => {
        if (result.d.length > 0) {
            let data = result.d[0].v

            res.status(200).json({
                username: data.username,
                credit: data.account.credit,
                discount: data.account.discount,
                status:true
            });
        } else {
            res.status(200).json({
                status: false
            });
        }
    });

    //account

    // console.log(s)


    // res.status(200).json({
    //     status: true
    // });
};