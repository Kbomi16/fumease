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
require("dotenv").config();
const apiKey = process.env.AI_API;

const OpenAI = require("openai");

router.get("/chatgpt", async function (req, res) {
  try {
    // 사용자가 선택한 키워드들을 요청 쿼리에서 가져온다.
    const { selectedKeywords } = req.query;
    console.log("프론트에서 사용자가 선택한 키워드:", selectedKeywords);
    const openai = new OpenAI({
      apiKey: apiKey,
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

    async function requestGPT() {
      do {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        check = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      } while (check.status !== "completed");

      const messages = await openai.beta.threads.messages.list(thread.id);
      console.log("Messages:", messages);
      console.log("First message content:", messages.data[0].content[0]);

      console.log("First message content:", messages.data[0].content[0]);

      // OpenAI에서 받은 응답을 처리
      const content = messages.data[0].content[0].text.value;

      const list = textToArray(content);
      return list;
    }

    // GPT답변 텍스트를 줄 단위로 분리하고, 각 행을 배열로 반환함.
    function textToArray(text) {
      const lines = text.split("\n");
      const perfumes = [];
      let currentPerfume = {};

      lines.forEach((line, index) => {
        if (line.includes("향수 이름")) {
          if (Object.keys(currentPerfume).length !== 0) {
            perfumes.push(currentPerfume);
            currentPerfume = {};
          }
          currentPerfume["name"] = line.split(": ")[1].trim();
        } else if (line.includes("향수 가격")) {
          currentPerfume["price"] = line.split(": ")[1].trim();
        } else if (line.includes("브랜드")) {
          currentPerfume["brand"] = line.split(": ")[1].trim();
        }
      });

      // 마지막 향수 정보를 배열에 추가
      if (Object.keys(currentPerfume).length !== 0) {
        perfumes.push(currentPerfume);
      }

      return perfumes;
    }
    var list = [];
    var perfumes = [];
    do {
      list = await requestGPT();
      const perfumeNames = list.map((perfume) => perfume.name);
      console.log("GPT 가 추천한 향수 개수" + list.length);
      perfumes = await Promise.all(
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

      console.log("추출한 답변(향수 리스트): ", perfumes.length);
    } while (!(perfumes.length > 0));
    //향수 한 개라도 나올때까지 계속 반복..

    res.json(perfumes.filter((perfume) => perfume != null));
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Error occurred during GPT processing");
  }
});

module.exports = router;
