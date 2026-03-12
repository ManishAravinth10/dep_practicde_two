const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT 

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/greet",(req,res)=>{
    const name=req.body
    res.send(`hello ${name}`)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});