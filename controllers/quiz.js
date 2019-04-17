const sequelize= require('sequelize');
const {models} = require("../models/index");

exports.index= (req,res,next)=>{

     models.quiz.findAll()

     .then((quiz)=>{res.render('../views/quizzes/index',{quiz})
     });

};