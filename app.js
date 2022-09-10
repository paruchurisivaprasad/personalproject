const express=require('express');
const app=express();

const PORT = process.env.PORT || 3000;
const cors=require('cors');
const userroutes=require('./routes/loginsignup');
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://paruchurisivaprasad:alMA933@cluster0.webkl.mongodb.net/personaldata?retryWrites=true&w=majority");
app.use(cors());
app.use(express.json());
app.use(userroutes);


app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})