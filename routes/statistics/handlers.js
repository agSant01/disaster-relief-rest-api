
exports.getStatistics = (req, res, next)=> {
    let msg = {
        data:{
            title:"",
            dataFormat:"",
            data:{
                x:[],
                y:[]
            }
        }
    };
    res.json(msg).end();
}

