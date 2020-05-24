const querylib = require('./queries');
const db = require('../../database');

exports.getAllOrganizations = async (is_debug) => {
    let query_text;

    console.log(is_debug);

    if (is_debug) {
        query_text = querylib.qAllOrganizationsDebug;
    } else {
        query_text = querylib.qAllOrganizations;
    }

    console.log(query_text);

    const result = await db.query(query_text);

    const msg = {
        count: result.rowCount,
        organizations: result.rows,
    };

    return msg;
};

exports.getOrganizationById = async (orgid, is_debug) => {
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
        values: [orgid],
    };

    console.log(query);

    const result = await db.query(query);

    const msg = {
        organization: result.rows,
    };

    return msg;
};

exports.getAllRepresentatives = async (orgid, is_debug) => {
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

    let result = await db.query(query);

    const msg = {
        count: result.rowCount,
        organization_id: orgid,
        representatives: result.rows,
    };

    return msg;
};

exports.getAllProviders = async (is_debug) => {
    let query;

    console.log(is_debug);

    if (is_debug) {
        query = querylib.qGetAllProvidersDebug;
    } else {
        query = querylib.qGetAllProviders;
    }

    // callback
    const result = await db.query(query);

    const msg = {
        count: result.rowCount,
        providers: result.rows,
    };

    return msg;
};

exports.getProviderById = async (provid, is_debug) => {
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

    const result = await db.query(query);

    let msg = {
        provider: result.rows,
    };

    return msg;
};

exports.insertOrganizationRepresentative = async (
    adminid,
    representative_id,
    organization_id
) => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await db.connect();
    try {
        console.log('Begin Transaction.');
        await client.query('BEGIN');

        const supplierInfo = await client.query(
            querylib.qOrganizationValidteRoleToAddRepresentative,
            [adminid, organization_id]
        );

        console.log('supplierinfo', supplierInfo);

        if (supplierInfo.rows.length == 0) {
            console.log(
                'User do not posses the credentials to add representative to organization'
            );
            let error = Error(`invalid credential`);
            error.response_msg = `User with id:'${adminid}' do not posses the credentials to add representative to organization:${organization_id}`;
            error.status = 400;
            throw error;
        }

        // validate is representative to add is an individual supplier
        const result = await db.query(
            querylib.qOrganizationAddRepresentativeValidateIndividualSupplier,
            [representative_id]
        );

        if (result.rows.length == 0) {
            let error = Error(
                `invalid credential for user '${representative_id}'`
            );
            error.status = 400;
            error.response_msg = `User '${representative_id}' is not an 'Individual Supplier'. Cannot be Organization representative`;
            throw error;
        }

        const addRepresentative = {
            text: querylib.qOrganizationAddRepresentative,
            values: [representative_id, organization_id],
        };

        console.log(addRepresentative);

        await client.query(addRepresentative);

        console.log('Committing Transaction.');

        await client.query('COMMIT');

        const msg = {
            msg: `Added representative to organization successfully.`,
            organization_id: organization_id,
            new_representative_id: representative_id,
        };

        return msg;
    } catch (error) {
        // only passes here if there is a problem with any query
        console.log('Error during transaction. Doing Rollback.', error);
        await client.query('ROLLBACK');

        if (
            error.code == '23505' &&
            error.constraint == 'organization_representative_pkey'
        ) {
            error.status = 400;
            error.response_msg = `Supplier with id:'${representative_id}' is already a representative .`;
        }

        throw error;
    } finally {
        console.log('Releasing client.');
        client.release();
    }
};

exports.insertOrganization = async (
    organization_name,
    userid,
    street1,
    street2,
    city,
    zip_code,
    country,
    phone_number,
    email
) => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await db.connect();
    try {
        console.log('Begin Transaction.');
        await client.query('BEGIN');

        const supplierInfo = await client.query(
            querylib.qIsIndividualSupplier,
            [userid]
        );

        if (supplierInfo.rows.length == 0) {
            console.log('Not a supplier');
            let error = Error('invalid credential');
            error.status = 400;
            error.response_msg = `User role is not 'Individual Supplier'. Cannot create organization`;
            throw error;
        }

        const insertOrganization = {
            text: querylib.qInsertOrganization,
            values: [
                organization_name,
                userid,
                street1,
                street2,
                city,
                zip_code,
                country,
                phone_number,
                email,
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

        return msg;
    } catch (error) {
        // only passes here if there is a problem with any query
        console.log('Error during transaction. Doing Rollback.', error);
        await client.query('ROLLBACK');

        if (
            error.code == '23505' &&
            error.constraint == 'organization_organization_name_key'
        ) {
            error.response_msg = `Organization '${organization_name}' already exists .`;
            error.status = 400;
        } else if (
            error.code == '23505' &&
            error.constraint == 'organization_email_key'
        ) {
            error.response_msg = `Organization with email '${email}' already exists .`;
            error.status = 400;
        }

        throw error;
    } finally {
        console.log('Releasing client.');
        client.release();
    }
};
