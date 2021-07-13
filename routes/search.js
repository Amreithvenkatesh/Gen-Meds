const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://user2021:sociothon2021@cluster0.9hmvi.mongodb.net/Gen-meds?retryWrites=true&w=majority";
const express=require('express');
const router=express.Router();


MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
    if (err){
      console.log(err)
    }
    let dbo = db.db("Gen-meds");
    //Route for search Feature
    router.get('/search',(req,res)=>{
      dbo.collection('Generic_medicines').aggregate([
        {
      $search: {
        "index":'uses',
        "compound": {
            "should": [
                {
                    "autocomplete": {
                        "query":`${req.query.term}`,
                        "path": "uses",
                       
                    }
                },
                {
                  "autocomplete": {
                      "query":`${req.query.term}`,
                      "path": "therapy",
                     
                  }
              },
                {
                    "autocomplete": {
                        "query":`${req.query.term}`,
                        "path": "generic_name"
                       
                    }
                }
            ],
        }
    }
    },
    {
        $limit:15
    }]).toArray()
        .then(data=>{
          console.log(data)
          res.send(data)
        })
        .catch(err=>{
          console.log(err)
          res.send('Oops Error')
      })
    })  
  });
module.exports=router