const mongoose = require('mongoose');



//connection of mongoose


mongoose.set('strictQuery', true)

const conn = mongoose.connect('mongodb://localhost:27017/persons',(err)=>{
    if(err){console.log('mongo DB NOT connected');}
    console.log('DB connected Successfully');
})



//schema of collection
const productSchema = mongoose.Schema({
    // feild1:{
    //     type:String,
    //     required:true
    // },
    // feild2:{
    //       type:String,
    //     required:true
    // },
}
)
 const Model =conn.model('todayguvi',productSchema)

 const model = new Model;
 model.save();

//mongoose queries

const all_product = Model.find((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
const between_price = Model.find({ price: { $gt: 400, $lt: 600 } }, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  const not_between_price = Model.find({price:{ $not: { $gt: 400, $lt: 600 } }}, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });
  const limited_value = Model.find({ age: { $gt: 500 } }).exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });

  
const product=  Model.find().select('name material').exec((err, products) => {
    if (err) {
      console.error(err);
    } else {
      console.log(products);
    }
  });
  const product_id=  Model.findOne({id:10}).select('name material').exec((err, products) => {
    if (err) {
      console.error(err);
    } else {
      console.log(products);
    }
  });
  const product_constrain=  Model.find({material:"soft"}).select('name material').exec((err, products) => {
    if (err) {
      console.error(err);
    } else {
      console.log(products);
    }
  });
 
  const product_colour_constrain=  Model.find({color: "color"},{price:492.00}).select('name material').exec((err, products) => {
    if (err) {
      console.error(err);
    } else {
      console.log(products);
    }
  });

  const product_delete_same_price=  Model.aggregate([
    { $group: { _id: "$price", count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } }
  ]).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
      const prices = results.map((result) => result._id);
      Product.deleteMany({ price: { $in: prices } }).exec((err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`${result.deletedCount} products deleted.`);
        }
      });
    }
  });
  
  
  
  
  