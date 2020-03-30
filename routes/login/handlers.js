
exports.postLogin = (req, res, next)=> {
    let msg = {
        login:{
            status: "ok",
            user:{}
        }
    };
    res.json(msg).end();
}


