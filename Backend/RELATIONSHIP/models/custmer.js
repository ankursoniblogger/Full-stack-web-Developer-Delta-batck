const mongoose = require('mongoose');

main().then( () => {console.log("Successfully connected")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelanshipDemo');
}



const orderSchema = new mongoose.Schema({
    item: String,
    price: String
});

const custmerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId , 
            ref: 'Order',
        }
    ]
})


// custmerSchema.pre("findOneAndDelete" , async () => {
//     console.log("Pre middlewears");
// })

custmerSchema.post("findOneAndDelete" , async (custmor) => {
   if(custmor.orders.length){
     let res =  await Order.deleteMany({ _id : { $in : custmor.orders }})
     console.log(res);
   }
})



const Order = mongoose.model("Order", orderSchema);
const Custmer = mongoose.model("Custmer" , custmerSchema);


const addCustmor = async () => {
    let cus1 = new Custmer( {
        name: "Ankur soni"
    });

    let order1 = await Order.findOne({item: "Samosa"})
    let order2 = await Order.findOne({item: "cake"})

    cus1.orders.push(order1)
    cus1.orders.push(order2);


    let res = await cus1.save();
    console.log(res)
}


// addCustmor();.js



// const addOrder = async () => {
//     let res = await Order.insertMany([
//         {item: "Samosa" , price: 12},
//         {item: "Choklate" , price: 30},
//         {item: "chipas" , price: 10},
//         {item: "cake" , price: 100},
//     ]);
//     console.log(res);
// }

// addOrder()


const addCust = async () => {
    let newCust = new Custmer( {
        name: "shradha khapra "
    })

    let newOrder =  new Order({
     item: "burger" ,
     price: 250 
    });

    newCust.orders.push(newOrder);

await newOrder.save();
await newCust.save();
console.log("Added new custmor");
}


// addCust();

const deltCus = async () => {
    let res = await Custmer.findByIdAndDelete("6520e16e798f11697b3f6fa9");
    console.log(res)
}
// deltCus()