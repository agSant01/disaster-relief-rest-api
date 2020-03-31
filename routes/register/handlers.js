/* 
This handler will work with the logic of registering a new user.
*/
exports.postRegister = (req, res, next) => {
    /*
    Validate that the structure of the post has the required fields:
    - Name    
        - First Name
        - Middle Name
        - Last Name
    - Birth Date
    - Address
        - Street 1
        - Street 2
        - City
        - Country
        - Zip code
    - Phone Number
    - Gender
    - Email
    - Username
    - Password
    - User type
    */

    /* 
    The server will return an 200-OK with  User Object
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
};
