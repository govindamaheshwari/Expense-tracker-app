const Sequelize= require('sequelize');
const sequelize= require('../util/database.js');

const Expanse= sequelize.define('expanse',{
    id:{type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
    },
    ammount:{type:Sequelize.DOUBLE,
    allowNull:false
    },
category:Sequelize.STRING,
description:Sequelize.STRING
    
    })
    
    module.exports=Expanse;