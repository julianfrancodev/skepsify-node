const jwt = require("jsonwebtoken");

module.exports = function( req, res, next){
    const token = req.header("x-auth-token");

    console.log(token);

    if(!token){
        return res.status(401).json({msg:"Empty toke in x-auth-token field"});
    }

    try {
        const cipher = jwt.verify(token, process.env.SECRET_KEY);

        req.user = cipher.user;

        next();
        
    } catch (e) {
        console.log(e);

        res.status(401).json({msg: "Invalid token" });
    }
}