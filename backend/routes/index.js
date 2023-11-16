var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/list", async function (req, res) {
  try {
    const products = await Perfume.findAll({
      attributes: ['f_id', 'f_name', 'f_price', 'f_img', 'f_brand']
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
      attributes: ['f_id', 'f_keyword']
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

// GPT
const OpenAI= require('openai');
router.get("/chatgpt",async function(req,res){
  try {
    const product = await Perfume.findOne({
      attributes: ['f_id', 'f_name', 'f_price', 'f_scent', 'f_note', 'f_img', 'f_brand', 'f_keyword']
    });
    res.json(product);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
  const { selectedKeywords } = req.query;

  const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  });
  const thread = await openai.beta.threads.create();
  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: selectedKeywords
    }
  );

  const run = await openai.beta.threads.runs.create(
    thread.id,
    { 
      assistant_id: "asst_y798sFICs2u5xBo4RPOG7SIg",
      // instructions: "사용자가 키워드를 입력하면 해당 키워드에 어울리는 향수를 추천해주는 시스템. 향수데이터는 향수정보.pdf 를 참고해서 추천해줘.향수 이름,향수가격,브랜드가 출력되게해줘."
    }
  );
  var intervalPromise=setInterval(async ()=>{
    const check = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );
    console.log(check)
    if(check.status=="completed"){
      clearInterval(intervalPromise)
      const messages = await openai.beta.threads.messages.list(
        thread.id
      );
      
    }
    
  },3000)
  
  // console.log(messages.data[])
})

module.exports = router;