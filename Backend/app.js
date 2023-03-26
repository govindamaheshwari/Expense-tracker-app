const express= require('express');

const controllers= require('./controllers/expense.js')
const bodyParser= require('body-parser')
const sequelize= require('./util/database.js');
const{urlencoded}= require('body-parser')
const Routes=require('./Routes/expense.js')
const app= express();
var cors= require('cors');
app.use(cors());
app.use(bodyParser.json(),urlencoded({extended:true}))
app.use(Routes)

sequelize.sync().then(result=>{console.log(result);}).catch(err=>{console.log(err);})
app.listen(3000,()=>{console.log("server running on port 3000");})

