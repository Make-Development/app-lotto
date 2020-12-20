
// Config - firebase
const Account = require('../../config/firebase.json');

const firebase = require("firebase");

firebase.initializeApp({
    serviceAccount: Account,
    databaseURL: Account.databaseURL,
    authDomain: Account.authDomain,
});

exports.get = function (_) {
    var db = firebase.database();
    return db.ref(_);
};


