const booking_ids = [
  // {
  //   booking_id: "",
  //   hall_id: 1,
  //   booked_at: ["start time", "end time"],
  //   customer_id: "id",
  // },
  // {
  //   booking_id: "",
  //   hall_id: 2,
  //   booked_at: ["start time", "end time"],
  //   customer_id: "id",
  // },
  // {
  //   booking_id: "",
  //   hall_id: 3,
  //   booked_at: ["start time", "end time"],
  //   customer_id: "id",
  // },
];

const customer_ids = [
  {
    customer_id: 1,
    customer_name: "name",
    customer_address: "address",
    booked_id:'',
  },
];



const hall_ids = [
  {
    hall_id: 1,
    available_now:false,
    hall_size: "w*l*b",
    stage_size: "w*l*b",
    seats: 50,
    price_per_hour: "1500",
    Address: "address",
  },
  {
    hall_id: 2,
    available_now:false,
    hall_size: "w*l*b",
    stage_size: "w*l*b",
    seats: 50,
    price_per_hour: "1500",
    Address: "address",
  },
  {
    hall_id: 3,
    available_now:false,
    hall_size: "w*l*b",
    stage_size: "w*l*b",
    seats: 50,
    price_per_hour: "1500",
    Address: "address",
  },
  {
    hall_id: 4,
    available_now:false,
    hall_size: "w*l*b",
    stage_size: "w*l*b",
    seats: 50,
    price_per_hour: "1500",
    Address: "address",
  },
  {
    hall_id: 5,
    available_now:false,
    hall_size: "w*l*b",
    stage_size: "w*l*b",
    seats: 80,
    price_per_hour: "3000",
    Address: "address",
  },
];


//updating the current and history of booking

setInterval(() => {





    const checkout = booking_ids.filter(
       (booked) => new Date(booked.booked_at[1]) < Date.now
     );

     
   
     checkout.forEach((hall)=>{
       const customer = booking_history.find(customer=>customer.customer_id == hall.customer_id)
       if(customer) booking_history.forEach((history)=>{
          
           if(history.customer_id == hall.customer_id){
               const newHistory ={...hall,status:"checked_out"}
               history.booked_lists.push(newHistory)
           }
   
       })
       else{ 
        const newHistory=  {
               customer_id: hall.customer_id,
               booked_lists: [
                 {
                   hall_id: hall.hall_id,
                   booking_id:hall.booking_id,
                   booking_status: "checked_out",
                   start_time: hall.booked_at[0],
                   end_time: hall.booked_at[1],
                 },
                   ],
             };
           booking_history.push(newHistory)}
     })

//setting current availability
     hall_ids.forEach((hall)=>{
      booking_ids.forEach((booking)=>{
       if (booking.hall_id==hall.hall_id){
        ((new Date(booking.booked_at[0])<= new Date())&&(new Date()<new Date(booking.booked_at[1])))?hall.available_now=false:hall.available_now=true
       }
  
  })
    })
   }, 60000 * 30);

const booking_history = [
  // {
  //   customer_id: "id",
  //   booked_lists: [
  //     {
  //       hall_id: "id",
  //       booking_id: "booking_id",
  //       booking_status: "",
  //       start_time: "start time",
  //       end_time: "end time",
  //     },
  //       ],
  // },
];

module.exports = {
  booking_ids,
  customer_ids,
  hall_ids,
  booking_history,
};
