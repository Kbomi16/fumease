var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/list", async function (req, res) {
  console.log("list")
  try {
    const products = await Perfume.findAll({
      attributes: ['f_name', 'f_price']
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});
router.get("/scent", async function (req, res) {
  res.json([])
})
router.get("/recommand", async function (req, res) {
  var list = await Perfume.findAll()
  let keywordList = []
  list.forEach(perfume => {
    keywordList.push({ name: perfume.f_name, keyword: perfume.f_keyword, secnt: perfume.f_scent })
  })
  res.json(keywordList)
})


module.exports = router;