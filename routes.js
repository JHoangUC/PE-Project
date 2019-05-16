var express = require("express");
var router = express.Router();
var clientSessions = require('client-sessions');
var formidable = require('formidable');
var fs = require('fs');

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});
router.get("/table",function(request,response){
	response.sendFile(__dirname + "/public/views/table.html");
});

////////////////////////////////////////////////////
const myDatabase = require('./myDatabase');

let db = new myDatabase();

router.get('/readData', function (req, res) {
console.log("inside routers");
console.log(req.query.period + " period");
res.json(db.getAllObjectWithID(req.query.teacher, req.query.period))




});


router.post('/sortData', function (req, res) {
  console.log("appending" + req.body);
  var obj = {id:req.body.id, roll:req.body.roll,
    period:req.body.period, teacher:req.body.teacher, laps: 1, totalTime: req.body.timer};
      res.json(db.addObject(obj));
});
router.post('/cooldown', function (req, res) {
  console.log("chaging cool down to " + req.body);
  var obj = {index:req.body.cool};
      res.json(db.setCoolDown(obj));
});
router.delete('/cart', function (req, res) {



			res.json(db3.deleteObjectWithID(req.body.index));
});

module.exports = router;
