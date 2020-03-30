
exports.getRoles = (req, res, next)=> {
    let msg = {
        roles: [
            "Admin",
            "Supplier",
            "Requester",
            "organization admin",
            "organization representative"]
    };
    res.json(msg).end();
}

exports.getRequests = (req, res, next)=>{
    let msg = {
        requests: {
            userID: req.params.id,
            requests:[]
        }
    };
    res.json(msg).end();
}

exports.getUsers = (req, res, next)=>{
    let msg = {
        users:[] 
    };
    res.json(msg).end();
}


