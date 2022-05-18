var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/id/news/the-art-behind-season-of-abyss', (req, res, next) => {
  res.render('SoAbyssConceptArtID');
});

router.get('SoAbyssConceptArt', (req, res, next) => {
  res.redirect('/id/news/the-art-behind-season-of-abyss');
});

router.get('/DoNCrafting', (req, res, next) => {
  res.redirect('https://www.thatskygame.com/news/crafting-memorable-days-of-nature-encounters');
});

module.exports = router;
