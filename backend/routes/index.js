var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/list", async function (req, res) {
  var list = await Perfume.findAll()
  res.json(list)
})
router.get("/recommand", async function (req, res) {
  var list = await Perfume.findAll()
  let keywordList = []
  list.forEach(perfume => {
    keywordList.push({ name: perfume.f_name, scent: perfume.f_scent, note: perfume.f_note })
  })
  res.json(keywordList)
})

module.exports = router;
