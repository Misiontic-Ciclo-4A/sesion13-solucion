const express=require('express');
require("dotenv").config();
const app =express();
const port = process.env.PORT||9000;
const userRoutes= require("./routes/users");
app.use(express.json());
app.use('/api',userRoutes);

// routes
app.get('/', (req,res)=>{
    res.send('Welcome to my api')
}

);

const mongoose = require('mongoose');
// mongodb connection 
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conectado a la base de datos atlas'))
.catch((error)=>console.error(error));
app.listen(port, ()=> console.log('server listening on port', port));
