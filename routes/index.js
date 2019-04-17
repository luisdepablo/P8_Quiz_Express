const express = require('express');
const router = express.Router();
const quizController= require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/credits',function(req,res,next){
  res.render('credits');
});

router.get('/quizzes', quizController.index);

module.exports = router;
