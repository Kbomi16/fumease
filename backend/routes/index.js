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
  try {
    // 사용자가 선택한 키워드들을 요청 쿼리에서 가져온다.
    const { selectedKeywords } = req.query;
    const openai = new OpenAI({
      apiKey: "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",
    });

    // 스레드를 통해 사용자와의 대화를 관리.
    const thread = await openai.beta.threads.create();
    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: selectedKeywords,
    });

    console.log("create run");
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: "asst_y798sFICs2u5xBo4RPOG7SIg",
    });
    console.log("create run", run);

    let check;
    do {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      check = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    } while (check.status !== "completed");

    const messages = await openai.beta.threads.messages.list(thread.id);
    console.log("Messages:", messages);
    console.log("First message content:", messages.data[0].content[0]);

    // GPT답변 텍스트를 줄 단위로 분리하고, 각 행을 배열로 반환함.
    function textToArray(text) {
      const lines = text.split("\n");
      const perfumes = [];
      let currentPerfume = {};

      lines.forEach((line, index) => {
        const [key, value] = line.split(" : ");

        if (key !== undefined && value !== undefined) {
          if (key.includes("향수 이름")) {
            if (Object.keys(currentPerfume).length !== 0) {
              if (currentPerfume["brand"]) {
                currentPerfume["brand"] = currentPerfume["brand"]
                  .replace(/\[.*?\]/g, "")
                  .trim();
              }
              perfumes.push(currentPerfume);
              currentPerfume = {};
            }
            currentPerfume["name"] = value.trim();
          } else if (key.includes("향수 가격")) {
            currentPerfume["price"] = value.trim();
          } else if (key.includes("브랜드")) {
            currentPerfume["brand"] = value;
          }
        }

        if (index === lines.length - 1 || index + 1 === lines.length) {
          if (currentPerfume["brand"]) {
            currentPerfume["brand"] = currentPerfume["brand"]
              .replace(/\[.*?\]/g, "")
              .trim();
          }
          perfumes.push(currentPerfume);
        }
      });
      return perfumes;
    }
    console.log("First message content:", messages.data[0].content[0]);

    // OpenAI에서 받은 응답을 처리
    const content = messages.data[0].content[0].text.value;
    const list = textToArray(content);
    // 수정된 부분: GPT 응답에서 추출한 향수 이름들
    const perfumeNames = list.map((perfume) => perfume.name);

    // 이름을 기반으로 데이터베이스에서 향수 상세 정보 가져오기
    const perfumes = await Promise.all(
      perfumeNames.map((perfumeName) => {
        if (perfumeName) {
          return Perfume.findOne({
            attributes: [
              "f_id",
              "f_name",
              "f_price",
              "f_img",
              "f_brand",
              "f_keyword",
            ],
            where: {
              f_name: perfumeName,
            },
          });
        }
      })
    );
    res.json(perfumes.filter((perfume) => perfume != null));
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Error occurred during GPT processing");
  }
});

module.exports = router;
