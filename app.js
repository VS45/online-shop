const express=require('express');
const bodyParser=require('body-parser')
const appRoutes=require('./routes/app.routes')
const app=express()
const path=require('path')
const PORT=8080
app.set('view engine','ejs');
app.set('views','view');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);
app.listen(PORT,()=>{
console.log(`server running at port ${PORT}`)
});