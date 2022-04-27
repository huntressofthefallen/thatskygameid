var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/SoAbyssConceptArt')
});

router.get('/SoAbyssConceptArt', (req, res, next) => {
  res.render('SoAbyssConceptArtID');
});

module.exports = router;
