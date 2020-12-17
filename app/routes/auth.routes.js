


const auth = require("../controller/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.header(
            "Access-Control-Allow-Headers",
            " Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/signup", auth.signup); 

    app.get("/",auth.show)
    // app.get("/", function (req, res) {
    //     let token = req.headers["Content-Type"];
    //     console.log("token",token);
    //     if (!token) {
    //         //res.setHeader("x-access-token","dddd")
    //         return res.json({
    //             message: "No token provided!"
    //         });
    //     } else {
    //        // console.log(token);
    //         res.render('pages/index', { name: "Lotto." });
    //     }
    // });

    // app.get("/login", function (req, res) {
    //     res.render('pages/index', { name: "Lotto." });
    // });



};