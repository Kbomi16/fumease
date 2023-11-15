var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/list", async function (req, res) {
  try {
    const products = await Perfume.findAll({
      attributes: ['f_id', 'f_name', 'f_price', 'f_img']
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
    keywordList.push({ name: perfume.f_name, keyword: perfume.f_keyword, scent: perfume.f_scent })
  })
  res.json(keywordList)
})
router.get("/keyword", async function (req, res) {
  try {
    const products = await Perfume.findAll({
      attributes: ['f_id','f_keyword']
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
})
// router.get("/detail", async function (req, res) {
//   try {
//     const products = await Perfume.findAll({
//       attributes: ['f_id', 'f_name', 'f_price', 'f_scent', 'f_note', 'f_img', 'f_brand']
//     });
//     res.json(products);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).send('Error fetching products');
//   }
// })

router.get("/detail/:f_id", async function (req, res) {
  try {
    const product = await Perfume.findOne({
      attributes: ['f_id', 'f_name', 'f_price', 'f_scent', 'f_note', 'f_img', 'f_brand'],
      where: { f_id: req.params.f_id }
    });
    res.json(product);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});


module.exports = router;