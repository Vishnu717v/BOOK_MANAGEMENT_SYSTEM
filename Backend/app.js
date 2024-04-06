const express=require('express');
const mongoose=require('mongoose');
const router=require("./routes/book-routes");
const cors=require('cors');
const app=express();

app.use(express.json());
app.use(cors());
app.use("/books",router);




mongoose.connect("mongodb://127.0.0.1:27017/BOOK", {
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
.then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(5000,console.log("connected "));
})
.catch((err)=>console.log(err));
