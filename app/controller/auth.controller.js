
const base = require('../models/firebase');

const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const key = require('../config/key.js');

// const { auth } = require('firebase-functions');

exports.signup = (req, res) => {

    const data = {
        username: req.body.username,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 4),
        role: "user",
        status: 1
    }

    const query = base.query("/auth").where("phone", data.phone);

    query.execute().then((result) => {

        if (result.d.length == 0) {
            var ref = base.ref("/auth")

            ref.push(data);

            res.status(200).json({
                status: true
            });
        } else {
            res.status(200).json({
                status: false
            });
        }
    })

};

exports.signin = (req, res) => {

    const data = {
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 4)
    }

    const query = base.query("/auth")
        .where("phone", data.phone)

    query.execute().then((result) => {
        if (result.d.length > 0) {
            let res_ = result.d[0].v;
            // console.log("dd",result.d[0].v)
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                res_.password
            );
            if (!passwordIsValid) {
                res.status(200).json({
                    status: false
                });
            } else {
                // var token = jwt.sign({ foo: data.phone}, key.jwt.secret,  { algorithm: 'RS256' } );
                var token = jwt.sign({ foo: data.phone }, key.jwt.secret);
                res.setHeader('x-access-token', token)
                res.cookie('token', token, {
                    expires  : new Date(Date.now() + (3600 * 60 * 24) * (24 * 5)),
                    httpOnly : false
                  });
                res.status(200).json({
                    status: true
                });
            }
        }
    });
    // var passwordIsValid = bcrypt.compareSync(
    //     req.body.password,
    //     user.password
    // );

};

exports.token =(req,res) => {
    // var decoded = jwt.verify(req.body.token,  key.jwt.secret);
    jwt.verify(req.body.token, key.jwt.secret, function(err, decoded) {
        if (err) {
            res.status(200).json({
                status: false
            });
        } else {
            res.status(200).json({
                status: true
            });
        }
      });
   
};