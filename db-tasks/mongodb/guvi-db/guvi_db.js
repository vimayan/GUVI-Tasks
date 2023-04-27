const mongoose = require('mongoose');



//connection of mongoose


mongoose.set('strictQuery', true)

const conn = mongoose.connect('mongodb://localhost:27017/guvi',(err)=>{
    if(err){console.log('mongo DB NOT connected');}
    console.log('DB connected Successfully');
})



//schema of collection
const userSchema = mongoose.Schema({

    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone_number: String,
    codekata_score:Number,
    mentorid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mentorSchema',
        required:true,
        unique:true
    },
   
    
});
const codekataSchema = mongoose.Schema({
    problem:String,
    solution:{
          type:String,
        required:true
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required:true,
        unique:true
    }
});

const attendanceSchema = mongoose.Schema({
    date:{
        type:Date,
        default:Date.now()
    },
    presents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required:true,
        unique:true
    }],
    absents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
        required:true,
        unique:true
    }]
});
const classSchema = mongoose.Schema({
    topic:String,
    task:[
   { description: String,
    deadline: Date}
    ],
    date:Date
});

const company_drivesSchema = mongoose.Schema({
    // feild1:{
    //     type:String,
    //     required:true
    // },
    // feild2:{
    //       type:String,
    //     required:true
    // },
});
const mentorSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        phone_number: String
      }
      
)
 const user =conn.model('users',userSchema);
 const mentor =conn.model('mentors',mentorSchema);
 const codekata =conn.model('codekatas',codekataSchema);
 const attendance =conn.model('attendances',attendanceSchema);
 const classes =conn.model('classes',classSchema);
 

 const lessens_on_october = user.find({date:{
    $gte: ISODate("2022-10-01"),
    $lt: ISODate("2022-11-01")
  }},(err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(docs);
    }
  });

  const codekata_count = codekata.aggregate([
    { $group: { _id: "$userid", count: { $sum: 1 } } },
  ]).exec((err, results) => {
    if (err) {
      console.error(err);
    } else {
        console.log(results);
    }})

    const mentee_count = userSchema.aggregate([
        { $group: { _id: "$mentorid", count: { $sum: 1 } } },
        { $match: { count: { $gt: 15 } } }
      ]).exec((err, results) => {
        if (err) {
          console.error(err);
        } else {
            console.log(results);
        }})