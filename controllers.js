var express = require("express");
var router = express.Router();
var Position = require("./models/Position");

router.get("/getPoints", function(req, res){
  Position.find({}, function(err, positions){
    if(err){
      res.send({state: "error", message: err});
    }else{
      res.send({state: "success", positions: positions});
    }
  });
});

module.exports = router;
