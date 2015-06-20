var express = require('express');
var router = express.Router();
var array=[];
count=0;

/* GET contacts */
router.get('/:id', function(req, res, next) {
 res.send(array[req.params.id]);
});

router.post('/', function(req, res, next) {
   count++;
   array.push(req.body);
   res.json(count-1);
});

router.put('/:id', function(req, res, next) {
array[req.params.id].firstName=req.body.firstName;
 return res.json(array[req.params.id]);

});

router.post('/messages', function(req, res, next) {
array[req.body.id].message=req.body.message;
  res.send(''+req.body.id);

});


module.exports = router;

