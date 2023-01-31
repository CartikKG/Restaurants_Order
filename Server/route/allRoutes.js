const User=require('../model/userModel');
const express=require('express');
const authorization = require('../middleware/authorization');
const route=express.Router();

route.post('/add-user',(req,res)=>{

})
route.post('/login-user',authorization,(req,res)=>{

})
route.post('/add-order',authorization,(req,res)=>{

})
route.get('/get-order',authorization,(req,res)=>{

})
