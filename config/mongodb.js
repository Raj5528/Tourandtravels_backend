const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/Travelling_agency',function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log("mongodb connected")
// });


mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://Raj:Jalandhar123@cluster0.fddd12w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log("Connection errr: ", err);
})