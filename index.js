import express from "express"

const app = express()

let stores = []

app.get("/", (req,res)=>{
 res.send("Shopify Store Finder Backend Running")
})

app.get("/stores",(req,res)=>{
 res.json(stores)
})

app.listen(3000,()=>{
 console.log("Backend running")
})
