module.exports = {
    qGetDailyStatistics: `with submitted as (
        select 
            resource_type.resource_type_id,
            resource_type_name,
            sum(resource.resource_quantity) as submitted_quantity
        from resource
        natural join submits_resource
        natural join resource_type
        natural join senate_region
        where resource_status_id = 1 
        and date(submits_resource.date_submitted) = current_date
        group by resource_type.resource_type_id
        order by resource_type.resource_type_name
    ), requested as (
        select 
            resource_type.resource_type_id,
            resource_type_name,
            sum(resource.resource_quantity) as requested_quantity
        from resource
        natural join request
        natural join resource_type
        natural join senate_region
        where resource_status_id = 1 
        and date(date_requested) = current_date
        group by resource_type.resource_type_id
    order by resource_type.resource_type_name
    )
    select (select json_agg(row_to_json((SELECT d FROM (SELECT
                    resource_type_name as resource_type,
                    submitted_quantity
                ) d))) from submitted) as submitted_resources_today,
            (select json_agg(row_to_json((SELECT d FROM (SELECT
                    resource_type_name as resource_type,
                    requested_quantity
                ) d))) from requested) as resource_requests_today,
            (
                select  
                    json_agg(row_to_json((SELECT d FROM (SELECT
                        resource_type_name as resource_type,
                        submitted_quantity,
                        requested_quantity,
                        (submitted_quantity-requested_quantity) as net_difference,
                        (
                            CASE WHEN submitted_quantity-requested_quantity > 0 THEN true
                                ELSE false
                           END
                        ) as resources_requests_is_matched
                    ) d)))
                from requested 
                natural join submitted
            ) as submits_requests_matching_today`,
};
