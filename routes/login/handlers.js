exports.postLogin = (req, res, next) => {
    /*
      Validate that the structure of the post has the required fields:
      - Username
      - Password
    */

    // Logic to authenticate the user

    /* 
    The server will return an 200-OK with an User Object
    */
    let response = {
        user: {
            first_name: 'Juan',
            last_name: 'Del Pueblo',
            dob: '15/05/1985',
            address: {
                street_1: 'Bo. Flores, Calle Rosas 46',
                street_2: null,
                city: 'Yabucoa',
                country: {
                    name: 'Puerto Rico',
                    abbreviation: 'PR'
                },
                zip_code: '00045'
            },
            phone: {
                area_code: '787',
                line_number: '5555555'
            },
            username: 'juandelpueblo',
            email: 'juan@pueblo.com',
            gender: 'male',
            user_type: 'admin'
        }
    };

    res.json(response).end();
    // let response = {
    //     login: {
    //         status: 'ok',
    //         user: {}
    //     }
    // };
    // res.json(msg).end();
};
