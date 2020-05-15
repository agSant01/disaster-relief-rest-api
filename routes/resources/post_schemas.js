const { validations } = require('indicative/validator');

module.exports = {
    resourceRequestSchema: {
        userid: 'required|number',
        requested_resources: [
            validations.required(),
            validations.array(),
            validations.min([1]),
        ],
        'requested_resources.*.resource_type': 'required|string',
        'requested_resources.*.quantity': 'required|number',
        'requested_resources.*.latitude': 'required|float',
        'requested_resources.*.longitude': 'required|float',
        'requested_resources.*.attributes': [
            validations.required(),
            validations.array(),
            validations.min([1]),
        ],
        'requested_resources.*.attributes.*.attr_name': 'required|string',
        'requested_resources.*.attributes.*.attr_value': 'required|string',
    },
    resourceSubmitSchema: {
        userid: 'required|number',
        resource_type: 'required|string',
        quantity: 'required|number',
        price: [
            validations.requiredWithoutAny(['is_for_sale']),
            validations.requiredWhen(['is_for_sale', true]),
            validations.float(),
            validations.above([0]),
        ],
        is_for_sale: [validations.requiredWithoutAll(['price'])],
        latitude: 'required|float',
        longitude: 'required|float',
        delivery_option: [
            validations.required(),
            validations.in(['Delivery or Pick-up', 'Delivery', 'Pick-up']),
            validations.string(),
        ],
        attributes: [
            validations.required(),
            validations.array(),
            validations.min([1]),
        ],
        'attributes.*.attr_name': 'required|string',
        'attributes.*.attr_value': 'required|string',
    },
    resourceReserveSchema: {
        userid: 'required|number',
        city: 'required|string',
        latitude: 'required|float',
        longitude: 'required|float',
        reserves: [
            validations.required(),
            validations.array(),
            validations.min([1]),
        ],
        'reserves.*.resource_id': 'required|number',
        'reserves.*.delivery_option': [
            validations.required(),
            validations.in(['Delivery or Pick-up', 'Delivery', 'Pick-up']),
            validations.string(),
        ],
        'reserves.*.quantity': [
            validations.number(),
            validations.required(),
            validations.above([0]),
        ],
    },
    resourceOrderSchema: {
        userid: 'required|number',
        city: 'required|string',
        latitude: 'required|float',
        longitude: 'required|float',
        payment_method: [
            validations.required(),
            validations.string(),
            validations.in([
                'Credit Card',
                'Debit',
                'Cash',
                'WIC',
                'ATH-Movil',
                'PayPal',
                'ApplePay',
                'Venmo',
                'CashApp',
                'Zelle',
            ]),
        ],
        purchases: [
            validations.required(),
            validations.array(),
            validations.min([1]),
        ],
        'purchases.*.resource_id': 'required|number',
        'purchases.*.delivery_option': [
            validations.required(),
            validations.in(['Delivery or Pick-up', 'Delivery', 'Pick-up']),
            validations.string(),
        ],
        'purchases.*.quantity': [
            validations.number(),
            validations.required(),
            validations.above([0]),
        ],
    },
};
