
exports.getProviders = (req, res, next)=> {
    let msg = {
        providers:[{},{}]
    };
    res.json(msg).end();
}



