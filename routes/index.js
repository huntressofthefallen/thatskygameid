var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/SoAbyssConceptArt', (req, res, next) => {
  res.render('SoAbyssConceptArtID');
});

router.get('/DoNCrafting', (req, res, next) => {
  res.render('DoNCraftingID');
});

module.exports = router;
