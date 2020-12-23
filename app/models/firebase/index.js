
// Config - firebase
const Account = require('../../config/firebase.json');
const firebase = require("firebase");
const gator = require('firebase-query-gator');

firebase.initializeApp({
    serviceAccount: Account,
    databaseURL: Account.databaseURL,
    authDomain: Account.authDomain,
});

const db = firebase.database();

exports.ref = function (_) {
    return db.ref(_);
};

exports.query = function (_) {
   // const db = firebase.database();
   gator.init(db);
    return gator.query(_)
};




