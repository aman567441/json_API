const express=require("express");
require("../src/db/conn");
const MenRanking=require("../src/models/mens");
const router=require("./routers/men");
const app=express();

const port=process.env.port || 8000;

app.use(express.json());

app.use(router)









app.listen(port, ()=>{
    console.log(`port is listning in ${port}`);
})