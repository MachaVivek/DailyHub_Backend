const express =require("express")
const mongoose =require("mongoose")
const cors = require("cors");
require("dotenv").config()
const app=express()

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("db connected")
})

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://daily-hub-frontend.vercel.app');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
// this contains routes
app.use(require('./router/auth_routes'))
app.use(require('./router/protected_routes'))
app.use(require('./router/dairyRoute'))
app.use(require('./router/mtrackerRoute'))
app.use(require('./router/newsRoute'))
app.use(require('./router/nightstoryRoute'))



// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({
    error: {
      message: error.message || 'Internal Server Error'
    }
  });
});

// middleware
const middleware=(req,res,next)=>{
    console.log("this is middleware");
    next();
}
app.get("/",middleware,(req,res)=>{
    res.send("Express Working")
})

app.listen(5000, () => {
    console.log("server running...");
});