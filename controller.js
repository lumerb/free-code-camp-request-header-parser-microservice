exports.whoami = (req, res) => {

    res.send({
        ipaddress: req.ip || req.connection.remoteAddress,
        language: req.acceptsLanguages(),
        software: req.headers["user-agent"]
        //Exploring the other things
        // 0: req.headers, 
        // 1: req.body,
        // 2: req.app,
        // 3: req.ip,
        // 4: req.cookies,
        // 5: req.acceptsLanguages(),
        // 6: req.connection.remoteAddress,
        // 7: req.headers["user-agent"]

    });

}