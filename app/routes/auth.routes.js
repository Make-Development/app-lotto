module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api",function(req, res){
        res.send([{
            "name":req.params.name
        }]);
    });

    app.get("/api/v1",function(req, res){
        res.send([{
            "name":"req.params.name"
        }]);
    });
    
};