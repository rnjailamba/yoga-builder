var express = require('express');
var router = express.Router();

var payloadPrep = function (data) {
    //depends on DB decision, but likely:
    return JSON.parse(data);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("online and prepared to receive");
});

router.get('/poses/', function (req, res, next) {
    //returns all poses

    //if next filter comes from within a returned dataset context,
    //pass currentSet &
    //rcurrentSet = results
})

router.get('/poses/:category', function (req, res, next) {
    //returns all poses matching the params.category
    //which should be passed either as a CSV string allowing
    //ease of arrayifying and passing to query

    //if next filter comes from within a returned dataset context,
    //pass currentSet &
    //rcurrentSet = results
})

router.get('/poses/:id', function (req, res, next) {
    //returns pose with id matching params.id
})

router.get('/poses/:name', function (req, res, next) {
    //function that translates params.name to params.id
    var id;
    res.redirect('/poses/' + id);
})

router.get('/poses/:anatomy', function (req, res, next) {
    //returns all poses that match an element of the arrayifiable
    //params.anatomy

    //if next filter comes from within a returned dataset context,
    //pass currentSet &
    //rcurrentSet = results
})

router.get('/', function (req, res, next) {
    //custom filtering call that gathers req.query.poses || req.query.sequences || etc.
    //and then chains
    //DB calls to provide the result.

    //is the only real route actually needed here.
})

router.get('/sequences/', function (req, res, next) {
    //placeholder until sequences
})


module.exports = router;
