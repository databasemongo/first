var express = require('express');
var router = express.Router();
var monk=require('monk');
var db=monk('localhost:27017/aditya');
var collection=db.get('signup');
console.log('connected');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/signup',function(req,res){
	var username=req.body.name;
	console.log(username);
	var email=req.body.email;
	console.log(email);
	var password=req.body.password;
	console.log(password);
	var confirmpassword=req.body.password2;
	console.log(confirmpassword);
	collection.insert({"username":req.body.name,"email":req.body.email,"password":req.body.password,"confirmpassword":req.body.name});
	res.redirect('/');
});

module.exports = router;
