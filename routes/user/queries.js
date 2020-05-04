module.exports = {
    //users route
    qAllUsers: `select * from users_table;`,
    qUser: `select * from users_table where userid=$1;`,
    qRoles: `select * from roles;`,
    qRequestsFromUser: `select * from request 
    where request_id 
    in (select distinct request_id 
        from request natural inner join users_table 
        where userid = $1);`,
};
