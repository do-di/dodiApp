const db = require("../models");
const Prodcut = db.products;
const Order = db.orders;
// const User = db.users;
const OrderDetails = db.orderDetails;

exports.buyProducts = async (req,res) => {
    const user = req.user
    const productId = req.body.productId.split(",")
    const quantity = req.body.quantity.split(",")
    
    var data_order = {
        amount : 0,
        userId : user.id,
    }
    try{
    order = await Order.create(data_order)
    order = await insertProductsIntoOrder(order, productId,quantity);
    return res.send(order)
    }catch(err) {
        return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
        });
    }
}

async function insertProductsIntoOrder(order,productId,quantity){
    for( var i =0; i< productId.length; i++ ){
        var orderDetails_data = {
            orderId : order.id,
            productId: productId[i],
            quantity: quantity[i],
        }
        await OrderDetails.create(orderDetails_data)
        let product = await Prodcut.findByPk(orderDetails_data.productId);
        order.amount = order.amount + product.price
    }
    order = await order.save()
    console.log("ahihi")
    return order
}


