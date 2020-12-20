



module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });


    app.get("/login", function (req, res) {
        res.render('pages/index', { name: "Lotto." });
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



};