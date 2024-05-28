const mysql = require('mysql');
const express = require("express")
const cors = require("cors")
const multer = require("multer")


const app = express()
app.use(cors())
app.use(express.json())


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rgukt@123",
  database: "sample"
});

app.get("/getData",(req,res)=>{
    con.query("SELECT * FROM users order by id DESC", async function (err, result, fields) {
        if (err) throw err;
       // console.log(result);
        res.json(result);
        //var orgData = await result.json();
        //console.log(orgData)
        //return result;
      });
});


var image;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../my-app/src/assets')
  },
  filename: function (req, file, cb) {
    //console.log(file)
   image = Date.now()+file.originalname;
    cb(null, Date.now()+file.originalname)
    //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    
  },  
});

const upload = multer({
  storage: storage,
})

app.post("/upload",upload.single('image'),(req,res)=>{
   const name = req.body.name;
   const position = req.body.position;
   const description = req.body.description;
   var values = [[position, name, description, image]];
   var sql = "INSERT INTO users (position, name, description, image) VALUES ?";
   con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("successfully inserted !!!");
  });
  res.json("success")
})

app.get("/Search/:element",(req,res)=>{
  var sql = "SELECT * FROM users order by id DESC";
  if(req.params["element"]!==""){
    sql = 'SELECT * FROM users where name like ? or position like ? or description like ?';
  }
  con.query(sql,["%"+req.params["element"]+"%","%"+req.params["element"]+"%","%"+req.params["element"]+"%"], async function (err, result, fields) {
    if (err) throw err;
   // console.log(result);
    res.json(result);
    //var orgData = await result.json();
    //console.log(orgData)
    //return result;
    console.log("success")
    //console.log(result)
  });
});

app.get("/",(re,res)=>{return res.json("from backend")})

app.listen(8000,()=>{console.log("listening")})
