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
    qAttributByType: `select 
        resource.resource_id,
        resource.resource_quantity as resources_available,
        resource.resource_location_latitude,
        resource.resource_location_longitude,
        resource_status.resource_status_name,
        submits_resource.userid as supplier_id,
        submits_resource.resource_price as price_per_unit,
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
    where resource_type_name = $1;`,
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
    qGetResourceById: `
        select 
            resource.resource_id,
            resource.resource_quantity as resources_available,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            U.resource_status_name,
            T.resource_type_name,
            S.senate_region_name,
            ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) 
            as google_maps_location,
            (select json_agg(row_to_json((SELECT d FROM (SELECT
                resource_type_field_name as attribute_name,
                resource_type_field_value as attribute_value
            ) d)))
            from resource_attribute
            where resource_attribute.resource_id = resource.resource_id)
            as attributes
        from resource
        natural join senate_region as S
        natural join resource_type as T
        natural join resource_status as U
        where resource.resource_id = $1;`,
    qGetResourceAllResources: `
        select 
            resource.resource_id,
            resource.resource_quantity as resources_available,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            U.resource_status_name,
            T.resource_type_name,
            S.senate_region_name,
            ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
            (select json_agg(row_to_json((SELECT d FROM (SELECT
                resource_type_field_name as attribute_name,
                resource_type_field_value as attribute_value
            ) d)))
            from resource_attribute
            where resource_attribute.resource_id = resource.resource_id)
            as attributes
        from resource
        natural join senate_region as S
        natural join resource_type as T
        natural join resource_status as U`,
    qGetAllResourcesAvailable: `
        with ordered as (
            select resource_id, coalesce(sum(resource_ordered.resources_quantity),0) as ordered_qty
            from resource_ordered group by resource_ordered.resource_id
            UNION
            select resource_id, coalesce(sum(reserved_resources.resources_quantity),0) as reserved_qty
            from reserved_resources group by reserved_resources.resource_id
        )
        select 
            resource.resource_id,
            (resource.resource_quantity - COALESCE((SELECT ordered_qty
            from ordered where ordered.resource_id=resource.resource_id), 0))::INTEGER as resources_available,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            resource_status.resource_status_name,
            submits_resource.userid as supplier_id,
            submits_resource.resource_price as price_per_unit,
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
        where resource_status_id = 1
        and (resource.resource_quantity - 
            coalesce((SELECT ordered_qty
            from ordered 
            where ordered.resource_id=resource.resource_id), 0)) > 0
        order by resource_type.resource_type_name;`,
    qGetAllResourcesAvailableByProvider: `
        with ordered as (
            select resource_id, coalesce(sum(resource_ordered.resources_quantity),0) as ordered_qty
            from resource_ordered group by resource_ordered.resource_id
            UNION
            select resource_id, coalesce(sum(reserved_resources.resources_quantity),0) as reserved_qty
            from reserved_resources group by reserved_resources.resource_id
        )
        select 
            resource.resource_id,
            (resource.resource_quantity - COALESCE((SELECT ordered_qty
            from ordered where ordered.resource_id=resource.resource_id), 0))::INTEGER as resources_available,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            resource_status.resource_status_name,
            submits_resource.userid as supplier_id,
            submits_resource.resource_price as price_per_unit,
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
        where resource_status_id = 1
        and (resource.resource_quantity - 
            coalesce((SELECT ordered_qty
            from ordered 
            where ordered.resource_id=resource.resource_id), 0)) > 0
        and userid = $1
        order by resource_type.resource_type_name;`,
    qGetAllResourcesAvailableByKeyword: `
        with ordered as (
            select resource_id, coalesce(sum(resource_ordered.resources_quantity),0) as ordered_qty
            from resource_ordered group by resource_ordered.resource_id
            UNION
            select resource_id, coalesce(sum(reserved_resources.resources_quantity),0) as reserved_qty
            from reserved_resources group by reserved_resources.resource_id
        )
        select 
            resource.resource_id,
            (resource.resource_quantity - COALESCE((SELECT ordered_qty
            from ordered where ordered.resource_id=resource.resource_id), 0))::INTEGER as resources_available,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            resource_status.resource_status_name,
            submits_resource.userid as supplier_id,
            submits_resource.resource_price as price_per_unit,
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
        where resource_status_id = 1
        and (resource.resource_quantity - 
            coalesce((SELECT ordered_qty
            from ordered 
            where ordered.resource_id=resource.resource_id), 0)) > 0
        and lower(
            regexp_replace(
                resource_type.resource_type_name, '[\s+]', '', 'g')) like $1
        order by resource_type.resource_type_name;`,

    qAttributeByResourceType: `select resource_type_field_name, resource_type_field_value
    from resource_attribute_definition
    where resource_attribute_id in (select P.resource_attribute_id 
                   from resource_attribute_definition as P
                    natural inner join resource_type as T 
                    where T.resource_type_name = '$1')`,
    qGetAllRequests: `select
            request.request_id,
            request.date_requested,
            request.userid,
            (
                select json_agg(row_to_json((SELECT d FROM (SELECT 
                    resource.resource_id,
                    resource.resource_quantity as quantity_requested,
                    resource.resource_location_latitude,
                    resource.resource_location_longitude,
                    ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
                    resource_type_name
                ) d))) 
                from resource
                natural join requested_resources
                natural join resource_type
                where requested_resources.request_id = request.request_id
            ) as requested_resources
        from request
        order by request_id`,
    qGetRequestsById: `select
        request.request_id,
        request.date_requested,
        request.userid,
        (
            select json_agg(row_to_json((SELECT d FROM (SELECT 
                resource.resource_id,
                resource.resource_quantity as quantity_requested,
                resource.resource_location_latitude,
                resource.resource_location_longitude,
                ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
                resource_type_name
            ) d))) 
            from resource
            natural join requested_resources
            natural join resource_type
            where requested_resources.request_id = request.request_id
        ) as requested_resources
    from request
    where request.request_id = $1`,
    qGetAllRequestsByKeyword: `
        select 
            resource_type.resource_type_name,
            request.userid as requestor_id,
            resource.resource_id,
            resource.resource_quantity as requested_quantity,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
            senate_region.senate_region_name,
            requested_resources.request_id,
            request.date_requested
        from requested_resources
        natural join resource
        natural join request
        natural join resource_type
        natural join senate_region
        natural join request_status
        where lower(
                regexp_replace(
                    resource_type.resource_type_name, '[\s+]', '', 'g')) like $1
        order by resource_type.resource_type_name`,
    getAllReservedResources: `
        select
            reserves.reserve_id,
            reserves.date_reserved,
            reserves.userid,
            (
                select json_agg(row_to_json((SELECT d FROM (SELECT 
                    resource.resource_id,
                    reserved_resources.resources_quantity as quantity_reserved,
                    resource.resource_location_latitude,
                    resource.resource_location_longitude,
                    ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
                    senate_region_name,
                    resource_type_name
                ) d)))
                from reserved_resources
                natural join resource
                natural join senate_region
                natural join resource_type
                where reserved_resources.reserve_id = reserves.reserve_id
            ) as reserved_resources
        from reserves
        order by reserve_id;`,
    getAllReservedResourcesById: `
        select
            reserves.reserve_id,
            reserves.date_reserved,
            reserves.userid,
            (
                select json_agg(row_to_json((SELECT d FROM (SELECT 
                    resource.resource_id,
                    reserved_resources.resources_quantity as quantity_reserved,
                    resource.resource_location_latitude,
                    resource.resource_location_longitude,
                    ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,
                    senate_region_name,
                    resource_type_name
                ) d)))
                from reserved_resources
                natural join resource
                natural join senate_region
                natural join resource_type
                where reserved_resources.reserve_id = reserves.reserve_id
            ) as reserved_resources
        from reserves
        where reserves.reserve_id = $1;`,
    qPurchasesByID: `select 
        orders.order_id as purchase_id,
        payment_method.payment_method_name as payment_method,
        (
        select json_agg(row_to_json((SELECT d FROM (SELECT 
            resource.resource_id,
            resource_ordered.resources_quantity as purchased_quantity,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            resource_type.resource_type_name,
            ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,    
            (
                select json_agg(row_to_json((SELECT d FROM (SELECT 
                    resource_type_field_name as attribute_name,
                    resource_type_field_value as attribute_value
                ) d)))
                from  resource_attribute 
                where resource_attribute.resource_id = resource_ordered.resource_id
            ) as attributes
            ) d)))
            from resource_ordered
            natural join resource
            natural join resource_type
            where resource_ordered.order_id = orders.order_id
        ) as resources_purchased,
        orders.order_timestamp as date_purchased
    from orders
    natural join payment_method
    where orders.order_id = $1
    order by orders.order_id;`,
    qPurchases: `select 
        orders.order_id as purchase_id,
        payment_method.payment_method_name as payment_method,
        (
        select json_agg(row_to_json((SELECT d FROM (SELECT 
            resource.resource_id,
            resource_ordered.resources_quantity as purchased_quantity,
            resource.resource_location_latitude,
            resource.resource_location_longitude,
            resource_type.resource_type_name,
            ('https://www.google.com/maps/dir/?api=1&destination='||resource_location_latitude||','||resource_location_longitude) as google_maps_location,    
            (
                select json_agg(row_to_json((SELECT d FROM (SELECT 
                    resource_type_field_name as attribute_name,
                    resource_type_field_value as attribute_value
                ) d)))
                from  resource_attribute 
                where resource_attribute.resource_id = resource_ordered.resource_id
            ) as attributes
            ) d)))
            from resource_ordered
            natural join resource
            natural join resource_type
            where resource_ordered.order_id = orders.order_id
        ) as resources_purchased,
        orders.order_timestamp as date_purchased
    from orders
    natural join payment_method
    order by orders.order_id;`,
    qInsertResource: `insert into resource(
        resource_quantity,
        resource_location_latitude,
        resource_location_longitude,
        resource_type_id,
        resource_status_id,
        senate_region_id
    ) values(
        $1,$2,$3,
        (select resource_type_id from resource_type where resource_type_name=$4),
        (select resource_status_id from resource_status where resource_status_name='Available'), 
        (select senate_region_id from 
            senate_region inner join city on 
                senate_region.senate_region_id=city.city_senate_region 
            where cityid = $5)
    ) returning resource_id;`,
    qInsertRequest: `insert into request(userid, request_status_id) 
    values(
        $1, 
        (select request_status_id from request_status where request_status_name='Unfulfilled')
    ) returning request_id;`,
    qInsertRequestedResource: `
    insert into requested_resources(request_id, resource_id)
    values($1, $2);`,
    qRequesterInfo: `select cityid from users_table 
    where userid=$1 
    and is_enabled=true 
    and role_id = (select role_id from roles where role_name='Requester')`,
    qInsertAttributes: `
    insert into resource_attribute(
        resource_id, 
        resource_type_field_name, 
        resource_type_field_value)
    values(
        $1,
        (select resource_type_field_name from
            resource_attribute_definition
            where lower($2)=lower(resource_type_field_name) 
            and resource_type_id=(select resource_type_id from resource_type where resource_type_name=$4)
            group by resource_type_field_name),
        (select coalesce(resource_type_field_value, $3) from
            resource_attribute_definition
            where lower($2)=lower(resource_type_field_name) 
            and ( 
                (resource_type_field_value is null) or 
                lower(resource_type_field_value)=lower($3) 
            )
            and resource_type_id=(select resource_type_id from resource_type where resource_type_name=$4)
        )
    )`,
    qGetAttributeFields: `select distinct resource_type_field_name
    from resource_attribute_definition
    where resource_type_id=(
        select resource_type_id 
        from resource_type 
        where lower(resource_type_name)=lower($1))
    group by resource_type_field_name;`,
};
