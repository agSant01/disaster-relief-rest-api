exports.getRoles = (req, res, next) => {
    let msg = {
        roles: [
            'System Administrator',
            'System Manager',
            'Supplier',
            'Requestor',
            'Organization Admin',
            'Organization Representative'
        ]
    };
    res.json(msg).end();
};

exports.getRequests = (req, res, next) => {
    let msg = {
        requests: {
            userID: req.params.id,
            requests: []
        }
    };
    res.json(msg).end();
};

exports.getUsers = (req, res, next) => {
    let response = {
        users: [
            {
                user_id: 123,
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
                user_type: 'Administrator'
            },
            {
                user_id: 190,
                first_name: 'Marcelo',
                last_name: 'Rios',
                dob: '15/05/1985',
                address: {
                    street_1: 'Bo. Caraizo, Calle Ramirez 5',
                    street_2: null,
                    city: 'Coamo',
                    country: {
                        name: 'Puerto Rico',
                        abbreviation: 'PR'
                    },
                    zip_code: '00395'
                },
                phone: {
                    area_code: '787',
                    line_number: '5555555'
                },
                username: 'marcelo78',
                email: 'marcelo@gmail.com',
                gender: 'Male',
                user_type: 'Organization Representative'
            }
        ]
    };

    res.json(response).end();
};

exports.getUser = (req, res, next) => {
    let user_id = req.params.id;

    let response = {
        user: {
            user_id: user_id,
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
