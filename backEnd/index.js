require("dotenv").config();
const express = require("express");
//to use it infront
const cors = require("cors");
const mongoose = require("mongoose");  

const app = express();
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', // frontend run on it 
  methods: ['GET','POST','DELETE','PUT'],
   credentials: true,
}));
//use  the model to coneect the schemaed
const mydata = require('./models/mySchema');
const port = process.env.PORT || 3000;
//imp to convert any json to js json for body is not define
app.use(express.json());
//to use form method  "post" in html code 
app.use(express.urlencoded({ extended: true }));
app.set("view engine",'ejs');
//static file as style
app.use(express.static('public'))
//frontend "render"
// const cors = require("cors");
// app.use(cors());
//to conect the db
    console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
   
  }) 
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
 app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    }); 
app.get("/sum/:n1/:n2", (req, res) => {
  const total = Number(req.params.n1) + Number(req.params.n2);
  res.json({ total });
});

// app.post("/", (req, res) => {
//   // res.send("test");
//   console.log(req.body);
//   const Mydata =new  mydata(req.body);
//   Mydata.save();
//   res.redirect('/done');
// });
app.delete("/deletedbyId/:userId",async (req, res) => {
  const id = req.params.userId;
    console.log(id);
  try {
   const deletedUser = await  mydata.findByIdAndDelete(id);
   if (!deletedUser){
    res.status(404).json({
      message : "the User is not found"
    })
   }
   res.status(200).json({
    message :"the User is deleted successfuly ",
    deletedUser :deletedUser
   })
     
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message:"yalhowiiiii",
      error:error
    })
  } 
 });
app.post("/addUser", async(req, res) => {

  try {
      const Myuser =new  mydata(req.body);
      await Myuser.save();
  res.status(201).json({
    message :"the Form Has Submitted successfuly"
  })
  } catch (err) {
    res.status(404).json({
    message :err
  })
  }
  // res.send("test");
  console.log(req.body);

});

app.get("/p", (req, res) => {
  // res.sendFile("views/home.html", { root: __dirname });
  mydata.find().then((result) => {
    console.log(result);
  res.render("home",{mytitle:"shahd" ,arr :result})
  }).catch((err) => {
    console.log(err);
  }
  );
});  
app.get("/getbyId/:userId",async (req, res) => {
  // res.sendFile("views/home.html", { root: __dirname });

  const id = req.params.userId
  console.log(id);
  try {
  const myUser =  await mydata.findById(id);
    res.send(myUser);
  } catch (error) {
    console.log(error);
  }
});
app.get("/done", (req, res) => {
  res.send("the name add successfuly");
});
app.get("/users", (req, res) => {
  mydata.find().then((result) => {
    res.send(result)
  }).catch((err)=>{
   res.send(err);
  });
 
  // res.send("the name add successfuly");
});
