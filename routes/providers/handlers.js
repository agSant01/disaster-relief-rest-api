const querylib = require('./queries');
const db = require('../../database');
const jsonSchema = require('./post_schemas');
const { validate } = require('indicative/validator');

exports.getProviders = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    let query;

    console.log(is_debug);

    if (is_debug) {
        query = querylib.qGetAllProvidersDebug;
    } else {
        query = querylib.qGetAllProviders;
    }

    // callback
    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.toString() })
                .end();
            return;
        }
        let msg = {
            count: result.rowCount,
            providers: result.rows,
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
        return;
    }

    const is_debug = req.query.debug == 'true';

    let query_text;

    console.log(is_debug);

    if (is_debug) {
        query_text = querylib.qGetProviderByIdDebug;
    } else {
        query_text = querylib.qGetProviderById;
    }

    const query = {
        text: query_text,
        values: [provid],
    };

    console.log(query.values);

    // callback
    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.toString() })
                .end();
            return;
        }
        let msg = {
            provider: result.rows,
        };

        res.json(msg).end();
    });
};

exports.getOrganizations = (req, res, next) => {
    const is_debug = req.query.debug == 'true';

    let query_text;

    console.log(is_debug);

    if (is_debug) {
        query_text = querylib.qAllOrganizationsDebug;
    } else {
        query_text = querylib.qAllOrganizations;
    }

    console.log(query_text);

    // callback
    db.query(query_text, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.toString() })
                .end();
            return;
        }

        let msg = {
            organizations: result.rows,
            count: result.rowCount,
        };

        res.json(msg).end();
    });
};

exports.postRegisterOrganization = (req, res, next) => {
    validate(req.body, jsonSchema.organizationRegister)
        .then((validatedJson) => {
            console.log(validatedJson);

            /////////////////
            // create a transaction block using await for simplicity
            (async () => {
                // note: we don't try/catch this because if connecting throws an exception
                // we don't need to dispose of the client (it will be undefined)
                const client = await db.connect();
                try {
                    console.log('Begin Transaction.');
                    await client.query('BEGIN');

                    const supplierInfo = await client.query(
                        querylib.qIsIndividualSupplier,
                        [validatedJson.userid]
                    );

                    if (supplierInfo.rows.length == 0) {
                        console.log('Not a supplier');
                        res.status(400)
                            .json({
                                msg: `User role is not 'Individual Supplier'. Cannot create organization`,
                            })
                            .end();
                        return;
                    }

                    const insertOrganization = {
                        text: querylib.qInsertOrganization,
                        values: [
                            validatedJson.organization_name,
                            validatedJson.userid,
                            validatedJson.address.street1,
                            validatedJson.address.street2,
                            validatedJson.address.city,
                            validatedJson.address.zip_code,
                            validatedJson.address.country,
                            validatedJson.phone_number,
                            validatedJson.email,
                        ],
                    };

                    console.log(insertOrganization);

                    const orgInfo = await client.query(insertOrganization);

                    console.log('Committing Transaction.');

                    await client.query('COMMIT');

                    let msg = {
                        msg: `Created organization successfully.`,
                        organization_id: orgInfo.rows[0].organization_id,
                    };

                    res.status(201)
                        .json(msg)
                        .end();
                } catch (e) {
                    // only passes here if there is a problem with any query
                    console.log('Error during transaction. Doing Rollback.', e);

                    let emsg = e.toString();
                    let status = 503;

                    await client.query('ROLLBACK');

                    res.status(status)
                        .json({ error: emsg })
                        .end();
                } finally {
                    console.log('Releasing client.');
                    client.release();
                }
            })().catch((e) => {
                // passes by here if something went wrong up
                console.error('Async Block Catch', e.stack);
                res.status(503)
                    .json({ error: e.toString() })
                    .end();
            });
            /////////////////////////////////////
        })
        .catch((error) => {
            console.log('JSON Validation Error', error);
            res.status(400)
                .json(error)
                .end();
        });
};

exports.getOrganization = (req, res, next) => {
    const organization_id = Number(req.params.orgID);

    if (isNaN(organization_id)) {
        res.status(401).json({
            error:
                "Invalid param for 'organization id'. Must be 'Integer' type.",
            invalid_param: req.params.orgID,
        });
        return;
    }

    const is_debug = req.query.debug == 'true';

    let query_text;

    console.log(is_debug);

    if (is_debug) {
        query_text = querylib.qOrganizationByIdDebug;
    } else {
        query_text = querylib.qOrganizationByID;
    }

    console.log(query_text);

    const query = {
        text: query_text,
        values: [organization_id],
    };

    console.log(query);

    // callback
    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.toString() })
                .end();
            return;
        }

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
        return;
    }

    const is_debug = req.query.debug == 'true';

    let query_text;

    console.log(is_debug);

    if (is_debug) {
        query_text = querylib.qOrganizationRepresentativeDebug;
    } else {
        query_text = querylib.qOrganizationRepresentative;
    }

    console.log(query_text);

    const query = {
        text: query_text,
        values: [orgid],
    };

    console.log(query);

    // callback
    db.query(query, (err, result) => {
        console.log(err, result);

        if (err) {
            res.status(503)
                .json({ error: err.toString() })
                .end();
            return;
        }
        console.log(result);

        const msg = {
            count: result.rowCount,
            organization_id: orgid,
            representatives: result.rows,
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

    if (isNaN(organization_id)) {
        res.status(401).json({
            error:
                "Invalid param for 'organization id'. Must be 'Integer' type.",
            invalid_param: req.params.orgID,
        });
        return;
    }

    validate(req.body, jsonSchema.organizationAddRepresentatives)
        .then((validatedJson) => {
            console.log(validatedJson);

            /////////////////
            // create a transaction block using await for simplicity
            (async () => {
                // note: we don't try/catch this because if connecting throws an exception
                // we don't need to dispose of the client (it will be undefined)
                const client = await db.connect();
                try {
                    console.log('Begin Transaction.');
                    await client.query('BEGIN');

                    const supplierInfo = await client.query(
                        querylib.qOrgganizationValidteRoleToAddRepresentative,
                        [validatedJson.adminid, organization_id]
                    );

                    if (supplierInfo.rows.length == 0) {
                        console.log(
                            'User do not posses the credentials to add representative to organization'
                        );
                        res.status(400)
                            .json({
                                msg: `User do not posses the credentials to add representative to organization:${organization_id}`,
                            })
                            .end();
                        return;
                    }

                    const addRepresentative = {
                        text: querylib.qOrganizationAddRepresentative,
                        values: [
                            validatedJson.representative_id,
                            organization_id,
                        ],
                    };

                    console.log(addRepresentative);

                    await client.query(addRepresentative);

                    console.log('Committing Transaction.');

                    await client.query('COMMIT');

                    let msg = {
                        msg: `Added representative to organization successfully.`,
                        organization_id: organization_id,
                        new_representative_id: validatedJson.representative_id,
                    };

                    res.status(201)
                        .json(msg)
                        .end();
                } catch (e) {
                    // only passes here if there is a problem with any query
                    console.log('Error during transaction. Doing Rollback.', e);

                    let emsg = e.toString();
                    let status = 503;

                    await client.query('ROLLBACK');

                    res.status(status)
                        .json({ error: emsg })
                        .end();
                } finally {
                    console.log('Releasing client.');
                    client.release();
                }
            })().catch((e) => {
                // passes by here if something went wrong up
                console.error('Async Block Catch', e.stack);
                res.status(503)
                    .json({ error: e.toString() })
                    .end();
            });
            /////////////////////////////////////
        })
        .catch((error) => {
            console.log('JSON Validation Error', error);
            res.status(400)
                .json(error)
                .end();
        });
};
