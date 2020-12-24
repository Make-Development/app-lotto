


const auth = require("../controller/auth.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/token", auth.token);

    app.post("/api/signin", auth.signin);

    app.post("/api/signup", auth.signup);
    
    app.get("/api/login", function (req, res) {
        res.render('pages/index', { name: "Lotto." });
    });



};