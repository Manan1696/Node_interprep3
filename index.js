// Q1. How do you create a simple Express.js application?

const express = require('express')

const server=express();

server.get("/home", (req, res) =>{
    res.send("Hi!");
})

server.listen(3000, () =>{
    console.log("server is running at:3000");
})

// Q2. Implementation of all type of exports in backend application

function defaulted(req,res){
  res.send("default export")
}

function named(req,res){
   res.send("named export")
}

module.exports = defaulted;

module.exports = {named};

// Q3. Implement CORS.

app.get("/addUser",(req,res)=>{
  console.log(req.query);
  res.send("success adduser");
})
app.put("/editUser/:Salary",(req, res) =>{
  console.log(req.params);
  res.send("success edituser");
})

app.listen(3000, () =>{
  console.log("server running on 3000");
});

// Q4. Create a middleware which will be applicable to all the routes.

const middleware1 = (req,res,next) => {
  console.log("Amiddleware1");
  next();
}

const middleware2 = (req,res,next) => {
  console.log("Bmiddleware2");
  next();
}

app.use(middleware1)

app.get('/about',(req,res) => {
  res.send("Manan")
})

app.get('/contact',middleware2,(req,res) => {
  res.send("Juli")
})

app.listen('3000',() => {
  console.log("Server is running on 3000...");
})
