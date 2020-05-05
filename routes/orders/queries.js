module.exports = {
    qAllOrders: `select orders.resource_quantity, orders.order_price, orders.userid, orders.order_timestamp, payment_method.payment_method_name from orders natural inner join payment_method `,
    qAllRequests:`select * from request`,
    qAllReservations:``,
    qAllTransactions:``,

}