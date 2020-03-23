require('dotenv').config();
const express=require('express');
const app=express();
const router=require('./routes');
const cors=require('cors')

const errorHandler=require('./middleware/error-handler')
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.use(router);
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log('Server listening on port:'+PORT);
})
