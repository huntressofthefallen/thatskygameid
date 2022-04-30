var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('https://www.thatskygame.com/');
});

router.get('/SoAbyssConceptArt', (req, res, next) => {
  res.render('SoAbyssConceptArtID');
});

router.get('/DoNCrafting', (req, res, next) => {
  res.redirect('https://www.thatskygame.com/news/crafting-memorable-days-of-nature-encounters');
});

module.exports = router;
