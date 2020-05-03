module.exports = {
    //users route
    qAllUsers: `select * from users_table;`,
    qUser: `select * from users_table where userid=$1;`,
    qRoles: `select * from roles;`,
    qRequestsFromUser: `select * from requests 
     where request_id 
     in (select distinct request_id 
         from requests natural inner join users_table 
         where userid = $1));`,
};
