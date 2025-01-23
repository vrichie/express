const express=require('express');
const app=express();
const path= require('path');
const logger=require('./middleware/logger');
const PORT=process.env.PORT || 5000;
//body parser middle ware to handle json data
app.use(express.json());

//body parser middle ware to handle json data
app.use(express.urlencoded({extended:false}));




// app.use(logger);



// app.get('/',(req,res)=>{

//     res.sendFile(path.join(__dirname,'public','index.html'));

// });

//set static folder

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members',require('./routes/api/members'));



app.listen(PORT,()=>{
    console.log(`Server running at port : ${PORT}`);
});