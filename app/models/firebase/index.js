
// Config - firebase
const Account = require('../../config/firebase.json');

const firebase = require("firebase");

firebase.initializeApp({
    serviceAccount: Account,
    databaseURL: Account.databaseURL,
    authDomain: Account.authDomain,
});

exports.view = function (_) {

    var db = firebase.database();
    // var ref = db.ref(_);
    // var ss=[]; 
    // ss = ref.once("value", function (snapshot) {
    //     var data = snapshot.val();   //Data is in JSON format.
    //     return data
    // });
    return db.ref(_);
};


