import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import FormModel from './models/Form.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//connect to mongoDB
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err));

//Router
app.post('/api/form', async(req,res)=>{
    try{
        const formData = new FormModel(req.body)
    }
})