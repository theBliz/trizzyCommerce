var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Trizzy Commerce' });
});

router.get('/product/:id', function(req, res) {
  res.render('single_product', { title: 'Trizzy Commerce', id: req.params.id });
});

router.get('/products/:category_id', function(req, res) {
  res.render('multi_products', { title: 'Trizzy Commerce', category_id: req.params.category_id });
});

module.exports = router;
