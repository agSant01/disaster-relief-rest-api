
exports.getTypes = (req, res, next)=> {
    let msg = {
        resources: []
    };
    res.json(msg).end();
}

exports.getAvailable = (req, res, next)=>{
    let msg = {
        resourcesAvailable: []
    };
    res.json(msg).end();
}

exports.getRequests = (req, res, next)=>{
    let msg = {
        resourcesRequested: []
    };
    res.json(msg).end();
}
exports.putUpdate = (req, res, next)=>{
    let msg = {
        request: {
            info:{},
            status:""
        }
    };
    res.json(msg).end();
}

