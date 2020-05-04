const querylib = require('./queries');
const db = require('../../database');

exports.getProviders = (req, res, next) => {
    // callback
    db.query(querylib.qGetAllProviders, (err, result) => {
        console.log(err, result);

        if (err) res.json(err).end();

        let msg = {
            providers: result.rows,
            count: result.rowCount,
        };

        res.json(result ? msg : err).end();
    });
};

exports.getProviderById = (req, res, next) => {
    const provid = Number(req.params.id);

    if (isNaN(provid)) {
        res.status(401).json({
            error: "Invalid param for 'provider id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
    }

    const query = {
        text: querylib.qGetProviderById,
        values: [provid],
    };

    console.log(query.values);

    // callback
    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) res.json(err).end();

        let msg = {
            provider: result.rows,
        };

        res.json(result ? msg : err).end();
    });
};

exports.getOrganizations = (req, res, next) => {
    console.log(querylib.qAllOrganizations);

    // callback
    db.query(querylib.qAllOrganizations, (err, result) => {
        console.log(err, result);

        if (err) res.json(err).end();

        let msg = {
            organizations: result.rows,
            count: result.rowCount,
        };

        res.json(msg).end();
    });
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
                    abbreviation: 'PR',
                },
                zip_code: '00865',
            },
            phone: {
                area_code: '939',
                line_number: '5555555',
            },
            administrator_username: 'juandelpueblo',
            email: 'disasteraid@pr.com',
        },
    };

    res.json(response).end();
};

exports.getOrganization = (req, res, next) => {
    const organization_id = Number(req.params.orgID);

    if (isNaN(organization_id)) {
        res.status(401).json({
            error:
                "Invalid param for 'organization id'. Must be 'Integer' type.",
            invalid_param: req.params.orgID,
        });
    }

    const query = {
        text: querylib.qOrganizationByID,
        values: [organization_id],
    };

    console.log(query);

    // callback
    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) res.json(err).end();

        console.log(result);

        let msg = {
            organization: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getRepresentatives = (req, res, next) => {
    const orgid = Number(req.params.orgID);

    if (isNaN(orgid)) {
        res.status(401).json({
            error:
                "Invalid param for 'organization id'. Must be 'Integer' type.",
            invalid_param: req.params.orgID,
        });
    }

    const query = {
        text: querylib.qOrganizationRepresentative,
        values: [orgid],
    };

    console.log(query);

    // callback
    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) res.json(err).end();

        console.log(result);

        const msg = {
            organization_id: orgid,
            representatives: result.rows,
            count: result.rowCount,
        };

        res.json(msg).end();
    });
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
