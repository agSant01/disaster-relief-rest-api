const jsonSchema = require('./post_schemas');
const { validate } = require('indicative/validator');
const ProvidersDao = require('./dao');

exports.getAllProviders = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    ProvidersDao.getAllProviders(is_debug)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getProviderById = (req, res, next) => {
    const provid = Number(req.params.id);
    const is_debug = req.query.debug == 'true';

    if (isNaN(provid)) {
        res.status(400).json({
            error: "Invalid param for 'provider id'. Must be 'Integer' type.",
            invalid_param: req.params.id,
        });
        return;
    }

    ProvidersDao.getProviderById(provid, is_debug)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getAllOrganizations = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    ProvidersDao.getAllOrganizations(is_debug)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getOrganizationById = (req, res, next) => {
    const organization_id = Number(req.params.orgID);
    const is_debug = req.query.debug == 'true';

    if (isNaN(organization_id)) {
        res.status(400).json({
            error:
                "Invalid param for 'organization id'. Must be 'Integer' type.",
            invalid_param: req.params.orgID,
        });
        return;
    }

    ProvidersDao.getOrganizationById(organization_id, is_debug)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.getRepresentativesByOrgId = (req, res, next) => {
    const orgid = Number(req.params.orgID);
    const is_debug = req.query.debug == 'true';

    if (isNaN(orgid)) {
        res.status(400).json({
            error:
                "Invalid param for 'organization id'. Must be 'Integer' type.",
            invalid_param: req.params.orgID,
        });
        return;
    }

    ProvidersDao.getAllRepresentatives(orgid, is_debug)
        .then((result) => {
            console.log('result', result);
            res.status(200)
                .json(result)
                .end();
        })
        .catch((error) => {
            console.log('error', error);
            res.status(503)
                .json({ error: error.stack })
                .end();
        });
};

exports.postRegisterOrganization = (req, res, next) => {
    validate(req.body, jsonSchema.organizationRegister)
        .then((validatedJson) => {
            console.log(validatedJson);
            ProvidersDao.insertOrganization(
                validatedJson.organization_name,
                validatedJson.userid,
                validatedJson.address.street1,
                validatedJson.address.street2,
                validatedJson.address.city,
                validatedJson.address.zip_code,
                validatedJson.address.country,
                validatedJson.phone_number,
                validatedJson.email
            )
                .then((result) => {
                    console.log('result', result);
                    res.status(201)
                        .json(result)
                        .end();
                })
                .catch((error) => {
                    console.log('error', error);

                    if (error.response_msg) {
                        res.status(error.status)
                            .json({ error: error.response_msg })
                            .end();
                    } else {
                        res.status(503)
                            .json({ error: error.stack })
                            .end();
                    }
                });
        })
        .catch((error) => {
            console.log('JSON Validation Error', error);
            res.status(400)
                .json(error)
                .end();
        });
};

exports.postAddRepresentative = (req, res, next) => {
    /*
    Validate that the structure of the post has the required fields:
    - Organization ID
    - Representative username
    */
    let organization_id = Number(req.params.orgID);

    if (isNaN(organization_id)) {
        res.status(400).json({
            error:
                "Invalid param for 'organization id'. Must be 'Integer' type.",
            invalid_param: req.params.orgID,
        });
        return;
    }

    validate(req.body, jsonSchema.organizationAddRepresentatives)
        .then((validatedJson) => {
            console.log(validatedJson);

            ProvidersDao.insertOrganizationRepresentative(
                validatedJson.adminid,
                validatedJson.representative_id,
                organization_id
            )
                .then((result) => {
                    console.log('result', result);
                    res.status(201)
                        .json(result)
                        .end();
                })
                .catch((error) => {
                    console.log('error', error);

                    if (error.response_msg) {
                        res.status(error.status)
                            .json({ error: error.response_msg })
                            .end();
                    } else {
                        res.status(503)
                            .json({ error: error.stack })
                            .end();
                    }
                });
        })
        .catch((error) => {
            console.log('JSON Validation Error', error);
            res.status(400)
                .json(error)
                .end();
        });
};
