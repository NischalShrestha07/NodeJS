const { name } = require('ejs')
const express=require('express')
const app=express()

app.set('view engine','ejs')


// app.get('/',(req,res)=>{
// res.send("This is a home page")
// })
app.get('/',(req,res)=>{
// res.render('./views/home.ejs') this throws errors 


// res.render('home.ejs')
res.render('home',{name:'Nischal',age:'21'})
})

app.get('/about',(req,res)=>{
res.send("<h1>This is about page</h1><h2>This is h2</h2><img src='me.jpg'>")
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

//1.nodemon
//2. node --watch app.js  then when we refresh it will work
