 const mongoose = require("mongoose");

 
//  mongodb+srv://namank797999:w6WMNyArqw3MoURW@cluster0.sbjtq.mongodb.net/


//  jo5BuyiuxTM719YL

//  namank89123

//  mongodb+srv://namank89123:jo5BuyiuxTM719YL@cluster0.loadk0k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

 const connectDB = async () => {
     
  await mongoose.connect(
    "mongodb+srv://aditya7776jnp:EEv1eHoLgWAgUSQr@devtinder.ueprqsb.mongodb.net/" 
  );
 }; 


 


  
 



 module.exports = connectDB;
 

 