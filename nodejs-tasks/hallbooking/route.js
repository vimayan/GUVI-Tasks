const router = require("express").Router();
const uuid = require("uuid");
const {
  booking_ids,
  customer_ids,
  hall_ids,
  booking_history,
} = require("./bookingHall");

router.get("/", (req, res) => {
  res.status(200).send("start");
});

router.get("/getrooms", (req, res) => {
  res.status(200).json(hall_ids);
});

router.get("/hall_slot/:hall_id", async (req, res) => {
  const hall_id = req.params.hall_id;

  const hall = await hall_ids.find((hallid) => hallid.hall_id == hall_id);
  try {
    if (!hall) return res.status(400).send("hall not exist");
    const reserved_slots = booking_ids.filter(
      (reserved) => reserved.hall_id == hall_id
    );
console.log(reserved_slots);
    if (reserved_slots.length!==0) {
      const booked_slots = [];
      await reserved_slots.forEach((slots) =>
        booked_slots.push(slots.booked_at)
      );
      res.status(200).json(booked_slots);
      return;
    } else {
      return res.status(200).end(`${hall_id} not reserved yet`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/createuser", async (req, res) => {
  const customer_name = req.body.username;
  const customer_address = req.body.address;

 
  
  if (!customer_name) {
   return  res.status(400).send("please add username");
    
  }
  const user = await customer_ids.find((userid) =>  userid.customer_name == customer_name);
  try {
        if(user) return res.status(400).send("user exists,change username");
  else{  await customer_ids.push({
      customer_id: uuid.v4(),
      customer_name: customer_name,
      customer_address: customer_address,
    });
    console.log(customer_ids);
    res.status(200).send("user created");
    return}
  } catch (err) {
    res.status(500).send(err);
  }
});



router.post("/:username/bookrooms/:hall_id", async (req, res) => {
  const customer_name = req.params.username;
  const hall_id = req.params.hall_id;
  const start_time =new Date(req.body.start_time).toUTCString();
  const end_time =new Date(req.body.end_time).toUTCString();
  if(new Date(start_time)>new Date(end_time)) return res.send("start time must be before end time");
  else if(new Date(start_time)<new Date()) return res.send("start time must be after current time");


  const user = await customer_ids.find((userid) => userid.customer_name === customer_name);

  const hall = await hall_ids.find((hallid) => hallid.hall_id == hall_id);
 
 
  try {


    if (!user) return res.status(400).send("user not exist");
    if (!hall) return res.status(400).send("hall not exist");

    const booking_id = `${customer_name}${uuid.v4()}`;
    const customer_id = user.customer_id;

    //checking the availability

  const availability= await  booking_ids.some((booking)=>{
    console.log(booking);
       if (booking.hall_id==hall_id){
       if( ((new Date(booking.booked_at[0])<= new Date(start_time))&&(new Date(start_time)<new Date(booking.booked_at[1])))||((new Date(booking.booked_at[0])< new Date(end_time))&&(new Date(end_time)<=new Date(booking.booked_at[1])))){
        return res.end("please change your booking time")
       
       }
       }
  
  })
    


if(!availability){
  booking_ids.push({
    booking_id: booking_id,
    hall_id: hall_id,
    booked_at: [start_time, end_time],
    customer_id: customer_id,
  });
  console.log(booking_ids);

  res.status(200).send(`your booking id--- ${booking_id}`);

return   customer_ids.map(customer=> {if( customer.customer_id==customer_id) customer.booked_id=booking_id})
 }

   
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

});
router.delete("/:username/cancelroom/:booking_id", async (req, res) => {
  const booking_id = req.params.booking_id;
  const customer_name = req.params.username;
  const user = await customer_ids.find((userid) => userid.customer_name == customer_name);
  const booking = await booking_ids.find((booked) => booked.booking_id == booking_id);
  if (user && booking){
    booking_ids.splice(booking.booking_id, 1);
    res.status(200).send("hall canceled successfully");
    return
  }
  else{
    res.status(400).send("check your username or booking_id");
    return
  }
     

});


router.get("/:username/mybooking", async(req, res) => {
  const customer_name = req.params.username;
  const user = await customer_ids.find((userid) => userid.customer_name ==customer_name);
  console.log(booking_ids);
  if (!user) return res.status(400).send("user not exist");
  const booking_list = await booking_ids.filter(userid=>userid.customer_id==user.customer_id)
    return res.status(200).json(booking_list);
});

router.get("/:username/mybooking_history", async(req, res) => {
  const customer_name = req.params.username;
  const user = await customer_ids.find((userid) => userid.customer_name ==customer_name);
  console.log(booking_history);
  if (!user) return res.status(400).send("user not exist");
  const booking_list = await booking_history.filter(userid=>userid.customer_id==user.customer_id)
    return res.status(200).json(booking_list);
});

module.exports = router;
