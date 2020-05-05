module.exports = {
    //resources
    qAllTypes: `select 
    resource_type_id,
    resource_type_name,
    (
        select 
            count(distinct resource_type_field_name) as attribute_name_count
        from resource_attribute_definition 
        where resource_attribute_definition.resource_type_id=resource_type.resource_type_id
    )::INTEGER,
    (select json_agg(row_to_json((SELECT d FROM (SELECT 
        resource_attribute_id as attribute_id, 
        resource_type_field_name as attribute_name,
        resource_type_field_value as attribute_value
    ) d)))
    from resource_attribute_definition 
    where resource_attribute_definition.resource_type_id = resource_type.resource_type_id)
    as attributes
    from resource_type`,
    qTypeAttribute: `
    select 
    resource_type_id,
    resource_type_name,
    (
        select 
            count(distinct resource_type_field_name) as attribute_name_count
        from resource_attribute_definition 
        where resource_attribute_definition.resource_type_id=resource_type.resource_type_id
    )::INTEGER,
    (select json_agg(row_to_json((SELECT d FROM (SELECT 
        resource_attribute_id as attribute_id, 
        resource_type_field_name as attribute_name,
        resource_type_field_value as attribute_value
    ) d)))
    from resource_attribute_definition 
    where resource_attribute_definition.resource_type_id = resource_type.resource_type_id)
    as attributes
    from resource_type
    where resource_type.resource_type_id=$1`,
    qGetAllResourcesAvailable: `
        select 
            resource.resource_id,
            resource.resource_quantity as available,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            resource_status.resource_status_name,
            submits_resource.userid as supplier_id,
            submits_resource.resource_price,
            date_submitted,
            resource_type_name
            method_name,
            senate_region_name,
            ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
            (select json_agg(row_to_json((SELECT d FROM (SELECT
                resource_type_field_name as attribute_name,
                resource_type_field_value as attribute_value
            ) d)))
            from resource_attribute
            where resource_attribute.resource_id = resource.resource_id)
            as attributes
        from resource
        natural join submits_resource
        natural join resource_type
        natural join delivery_method
        natural join senate_region
        natural join resource_status
        where resource_status_id = 1;
    `,

    qAttributeByResourceType: `select resource_type_field_name, resource_type_field_value
    from resource_attribute_definition
    where resource_attribute_id in (select P.resource_attribute_id 
                   from resource_attribute_definition as P
                    natural inner join resource_type as T 
                    where T.resource_type_name = '$1')`,
    //// #TODO: test this query
    qAllRequestsAvailables: `with resource_remaing as (
        select 	
        res.resource_id, o.resource_quantity + reserves.quantity as qty 
        from resource as res
        natural join reserves
        natural join orders as o
        )
        select * 
        from resource 
        natural join resource_remaing
        where resource.resource_quantity > resource_remaing.qty;`,
    qAllOrders:``,
    qAllReserves:``,
};
