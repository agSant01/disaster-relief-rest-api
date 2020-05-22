const db = require('../../database');
const querylib = require('./queries');

exports.getAllTypes = async () => {
    const result = await db.query(querylib.qAllTypes);

    const msg = {
        count: result.rowCount,
        resource_types: result.rows,
    };

    return msg;
};

exports.getResourceTypeAttributesById = async (resourceType) => {
    let query = {
        text: querylib.qTypeAttribute,
        values: [resourceType],
    };

    const result = await db.query(query);

    let set = new Set();

    result.rows.forEach((val, inx) => set.add(val.attribute_name));

    console.log(set, set.size);

    const msg = {
        resource_attributes: result.rows,
    };

    return msg;
};

exports.getAllPurchases = async () => {
    const result = await db.query(querylib.qPurchases);

    const msg = {
        count: result.rowCount,
        purchases: result.rows,
    };

    return msg;
};

exports.getPurchaseById = async (id) => {
    const query = {
        text: querylib.qPurchasesByID,
        values: [id],
    };

    const result = await db.query(query);

    const msg = {
        purchase: result.rows,
    };

    return msg;
};

exports.getAvailableResourcesByProviderId = async (provider_id) => {
    const query = {
        text: querylib.qGetAllResourcesAvailableByProviderWithOptKeyword,
        values: [provider_id, `%${keyword.toLowerCase().replace(/\s/g, '')}%`],
    };

    console.log(query);

    const result = await db.query(query);

    const msg = {
        count: result.rowCount,
        supplier_id: Number(provider_id),
        resources_available: result.rows,
    };

    return msg;
};

exports.getAllAvailableResources = async (keyword) => {
    let query = querylib.qGetAllResourcesAvailable;

    if (keyword) {
        console.log(keyword);

        query = {
            text: querylib.qGetAllResourcesAvailableByKeyword,
            values: [`%${keyword.toLowerCase().replace(/\s/g, '')}%`],
        };
    }

    const result = await db.query(query);

    const msg = {
        count: result.rows.length,
        resources_available: result.rows,
    };

    return msg;
};

exports.getAvailableResourceById = async (resourceId) => {
    const query = {
        text: querylib.qGetAllResourcesAvailableByResourceId,
        values: [resourceId],
    };

    console.log(query);

    const result = await db.query(query);

    const msg = {
        count: result.rows.length,
        resources_available: result.rows,
    };

    return msg;
};

exports.getAllRequests = async (keyword) => {
    let query = querylib.qGetAllRequests;

    if (keyword) {
        console.log(keyword);

        query = {
            text: querylib.qGetAllRequestsByKeyword,
            values: [`%${keyword.toLowerCase().replace(/\s/g, '')}%`],
        };
    }

    const result = await db.query(query);

    const msg = {
        count: result.rowCount,
        requests: result.rows,
    };

    return msg;
};

exports.getRequestById = async (reqid) => {
    const query = {
        text: querylib.qGetRequestsById,
        values: [reqid],
    };
    const result = await db.query(query);
    return {
        count: result.rowCount,
        requests: result.rows,
    };
};

exports.getAllReserves = async () => {
    const result = await db.query(querylib.getAllReservedResources);
    return {
        count: result.rowCount,
        reserves: result.rows,
    };
};

exports.getReserveById = async (resid) => {
    const query = {
        text: querylib.getAllReservedResourcesById,
        values: [resid],
    };
    const result = await db.query(query);
    return {
        count: result.rowCount,
        reserves: result.rows,
    };
};
