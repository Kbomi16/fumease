var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/list", async function (req, res) {
  try {
    const products = await Perfume.findAll({
      attributes: ["f_id", "f_name", "f_price", "f_img", "f_brand"],
    });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
});
router.get("/scent", async function (req, res) {
  res.json([]);
});
router.get("/recommand", async function (req, res) {
  var list = await Perfume.findAll();
  let keywordList = [];
  list.forEach((perfume) => {
    keywordList.push({
      name: perfume.f_name,
      keyword: perfume.f_keyword,
      scent: perfume.f_scent,
    });
  });
  res.json(keywordList);
});
router.get("/keyword", async function (req, res) {
  try {
    const products = await Perfume.findAll({
      attributes: ["f_id", "f_keyword"],
    });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
});
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
      attributes: [
        "f_id",
        "f_name",
        "f_price",
        "f_scent",
        "f_note",
        "f_img",
        "f_brand",
      ],
      where: { f_id: req.params.f_id },
    });
    res.json(product);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
});

// GPT
const OpenAI = require("openai");

router.get("/chatgpt", async function (req, res) {
  // 사용자가 선택한 키워드들을 요청 쿼리에서 가져온다.
  const { selectedKeywords } = req.query;
  const openai = new OpenAI({
    apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
  });

  // 스레드를 통해 사용자와의 대화를 관리.
  const thread = await openai.beta.threads.create();
  const message = await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: selectedKeywords, // 메시지의 내용은 사용자가 선택한 키워드가 들어감.
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: "asst_y798sFICs2u5xBo4RPOG7SIg",
    instructions:
      "사용자가 키워드를 입력하면 해당 키워드에 어울리는 향수를 추천해주는 시스템. 향수데이터는 향수정보.pdf 를 참고해서 추천해줘.향수 이름,향수가격,브랜드가 출력되게해줘.",
  });

  //  3초마다 GPT 모델의 실행 상태를 확인하고, 실행이 완료되면 결과를 가져와서 클라이언트에게 반환하는 작업을 수행함
  var intervalPromise = setInterval(async () => {
    const check = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    console.log(check);

    if (check.status == "completed") {
      clearInterval(intervalPromise);
      const messages = await openai.beta.threads.messages.list(thread.id);
      console.log("Messages:", messages);
      try {
        // OpenAI에서 받은 응답을 줄 단위로 분리
        let content = messages.data[0].content;
        const perfumeNames = content
          .map((line) => {
            // line.text.value 접근
            const index = line.text.value.indexOf("**향수 이름**:");
            if (index !== -1) {
              return line.text.value
                .substring(index + "**향수 이름**:".length)
                .trim();
            }
            return null;
          })
          .filter((name) => name != null); // null과 undefined 제거

        // 추출한 각 향수 이름에 대해 데이터베이스에서 정보를 찾아 반환
        const perfumes = await Promise.all(
          perfumeNames.map((perfumeName) => {
            return Perfume.findOne({
              attributes: [
                "f_id",
                "f_name",
                "f_price",
                "f_scent",
                "f_note",
                "f_img",
                "f_brand",
                "f_keyword",
              ],
              where: {
                f_name: perfumeName,
              },
            });
          })
        );
        res.json(perfumes.filter((perfume) => perfume != null)); // null과 undefined 제거
      } catch (error) {
        console.error("Error fetching perfumes:", error);
        res.status(500).send("Error fetching perfumes");
      }
    }
  }, 3000);
});

module.exports = router;
