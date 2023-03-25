const fs=require("fs")
const path=require("path")
const express=require("express")
fs.writeFileSync("index.html",`<h1>hello world</h1><p>this is hitesh</p>`)
const dirpath=path.join(__dirname,"index.html")

let app=express()

app.get("",(req,resp)=>{
    resp.sendFile(dirpath)
}).listen(4500)

