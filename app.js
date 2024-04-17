const express=require('express')
const app=express()

app.get('/',(req,res)=>{
res.send("This is a home page")
})

app.get('/about',(req,res)=>{
res.send("<h1>This is about page</h1>")
})

app.get('/blog',(req,res)=>{
res.send("Welcome to blog page")
})

// rest apis
app.get('/createblog',(req,res)=>{
res.send("So, this is a create blog")
})
app.get('/create/blog',(req,res)=>{
res.send("So, this is a inside create then blog")
})

// restful apis
app.get('/blog/edit',(req,res)=>{
res.send("So, Here we will gona do editing")
})



app.listen(3000,()=>{
    console.log("Server has started at port 3000");
})