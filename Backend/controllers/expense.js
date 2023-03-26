const Expanse = require('../models/expense.js')
exports.getExpanses=async(req,res,next)=>{
let expanses= await Expanse.findAll();
console.log('<gettingAllExpenses>',expanses);
res.send({expanses:expanses});
}
exports.addExpanse= async(req,res,next)=>{
    console.log('<>###<>',req.body);
    console.log("we are in ");
  await  Expanse.create({
        ammount:req.body.amount,
        description: req.body.description,
        category:req.body.category
    }).then(result=>{res.status(200).json({result:result})}).catch(err=>{console.log(err);console.log("code wasnt executed");});
}

exports.deleteExpanse= async (req,res,next)=>{
    const id = req.params.expanseId;
 Expanse.findByPk(id).then(expanse=>{ return expanse.destroy()}).then(result=>{console.log("object deleted"); console.log(result);res.json({expanses:result})}).catch(err=>{console.log(err);})
}
