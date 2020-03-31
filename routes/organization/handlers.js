exports.getOrganizations = (req, res, next) => {
    let response = {
        organizations: [
            {
                organization_id: 1241,
                organization_name: 'Disaster Relief Aid',
                address: {
                    street_1: 'MCS Plaza 152, #87',
                    street_2: null,
                    city: 'Hato Rey',
                    country: {
                        name: 'Puerto Rico',
                        abbreviation: 'PR'
                    },
                    zip_code: '00865'
                },
                phone: {
                    area_code: '939',
                    line_number: '5555555'
                },
                administrator_username: 'juandelpueblo',
                email: 'disasteraid@pr.com'
            }
        ]
    };

    res.json(response).end();
};

exports.postRegister = (req, res, next) => {
    /*
    Validate that the structure of the post has the required fields:
    - Organization Name
    - Birth Date
    - Address
        - Street 1
        - Street 2
        - City
        - Country
        - Zip code
    - Phone Number
    - Email
    - Username
    - Password
    - Administrator
    */

    /* 
    The server will return an 200-OK with Organization Object
    */
    let response = {
        organization: {
            organization_id: 1241,
            organization_name: 'Disaster Relief Aid',
            address: {
                street_1: 'MCS Plaza 152, #87',
                street_2: null,
                city: 'Hato Rey',
                country: {
                    name: 'Puerto Rico',
                    abbreviation: 'PR'
                },
                zip_code: '00865'
            },
            phone: {
                area_code: '939',
                line_number: '5555555'
            },
            administrator_username: 'juandelpueblo',
            email: 'disasteraid@pr.com'
        }
    };

    res.json(response).end();
};

exports.getOrganization = (req, res, next) => {
    let organization_id = Number(req.params.orgID);

    let response = {
        organization: {
            organization_id: organization_id,
            organization_name: 'Disaster Relief Aid',
            address: {
                street_1: 'MCS Plaza 152, #87',
                street_2: null,
                city: 'Hato Rey',
                country: {
                    name: 'Puerto Rico',
                    abbreviation: 'PR'
                },
                zip_code: '00865'
            },
            phone: {
                area_code: '939',
                line_number: '5555555'
            },
            administrator_username: 'juandelpueblo',
            email: 'disasteraid@pr.com'
        }
    };

    res.json(response).end();
};

exports.getRepresentatives = (req, res, next) => {
    let organization_id = Number(req.params.orgID);

    let response = {
        representatives: [
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
            },
            {
                user_id: 191,
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

exports.postAddRepresentative = (req, res, next) => {
    /*
    Validate that the structure of the post has the required fields:
    - Organization ID
    - Representative username
    */
    let organization_id = Number(req.params.orgID);

    // Empty response
    let response = {};

    /* 
    The server will return an 200-OK with Organization Object
    */
    res.json(response).end();
};
