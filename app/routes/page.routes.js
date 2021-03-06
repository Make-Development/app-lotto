



module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });


    app.get("/", function (req, res) {
        res.render('pages/login', { name: "Lotto." });
    });

    app.get("/register", function (req, res) {
        res.render('pages/register', { name: "Lotto." });
    });

    app.get("/pincode", function (req, res) {
        res.render('pages/pincode', { name: "Lotto." });
    });

    app.get("/profile", function (req, res) {
        res.render('pages/profile');
    });

    app.get("/order", function (req, res) {
        res.render('pages/order');
    });

    app.get("/404", function (req, res) {
        res.render('pages/404');
    });



};