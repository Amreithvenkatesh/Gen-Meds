const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://user2021:sociothon2021@cluster0.9hmvi.mongodb.net/Gen-meds?retryWrites=true&w=majority";
const express=require('express');
const router=express.Router();

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  let dbo = db.db("Gen-meds");
  router.get('/medicine',(req,res)=>{
    dbo.collection('Generic_medicines').find({}).toArray()
    .then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        res.send('OOH Error')
        console.log(err)
    })
   
  })
});
module.exports=router