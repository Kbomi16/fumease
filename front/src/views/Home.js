// Home.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css"; // styles를 import
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";

function formatPrice(price) {
  return price.toLocaleString(); // 숫자를 천단위로 쉼표가 포함된 문자열로 변환
}

const Home = () => {
  // 모달 열기/닫기를 위한 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달을 열기 위한 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 키워드 가져오기
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/keyword", {
        headers: {
          "Access-Control-Allow-Origin": "*", // 허용할 Origin
        },
      })
      .then((response) => {
        const keywordArray = response.data;
        // 데이터가 배열인지 확인
        if (Array.isArray(keywordArray)) {
          // 모든 키워드를 쪼개어 각 단어로 분할
          const allKeywords = keywordArray.reduce((acc, keyword) => {
            const keywords = keyword.f_keyword
              .split(",")
              .map((keyword) => keyword.trim());
            return [...acc, ...keywords];
          }, []);

          // 중복 제거를 위해 Set 사용
          const uniqueKeywords = Array.from(new Set(allKeywords));
          setKeywords(uniqueKeywords);
        } else {
          console.error("Received invalid data", keywordArray);
        }
      })
      .catch((error) => {
        console.error("Error fetching keywords:", error);
      });
  }, []);

  // 알림 메시지를 위한 상태 추가
  const [alertMessage, setAlertMessage] = useState("");

  const handleKeywordClick = (keyword) => {
    // 이미 선택된 키워드인지 확인
    if (selectedKeywords.includes(keyword)) {
      // 이미 선택된 키워드를 취소하는 부분
      const updatedKeywords = selectedKeywords.filter((key) => key !== keyword);
      setSelectedKeywords(updatedKeywords);
      setAlertMessage(`${keyword} 키워드가 취소되었습니다.`);
      return;
    }

    // 선택된 키워드가 3개인지 확인
    if (selectedKeywords.length === 3) {
      setAlertMessage("이미 3개의 키워드를 선택하셨습니다.");
      return;
    }

    setSelectedKeywords([...selectedKeywords, keyword]);
    setAlertMessage("키워드를 선택하세요.");
  };
  // 사용자가 선택한 키워드를 저장하는 state
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  console.log(selectedKeywords);

  // 사용자가 선택한 향수 추천 결과를 저장하는 상태
  const [recommendedPerfumes, setRecommendedPerfumes] = useState([]);

  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 관리하는 state

  // GPT-4에게 향수 추천을 요청하는 함수
  const handleRecommendationClick = async () => {
    if (selectedKeywords.length === 3) {
      setIsLoading(true); // 데이터를 가져오기 전에 로딩 상태를 true로 설정
      setIsModalOpen(true);
      try {
        if (selectedKeywords.length === 0) {
          throw new Error("사용자가 키워드를 제공하지 않았습니다.");
        }

        // selectedKeywords를 쉼표로 구분된 문자열로 변환
        const keywordString = selectedKeywords.join(",");
        const response = await axios.get(
          // `http://localhost:3001/chatgpt?selectedKeywords=${keywordString}`
          `http://localhost:3001/chatgpt`,
          {
            params: {
              selectedKeywords: keywordString,
            },
          }
        );
        const recommendedPerfumes = response.data;
        console.log("백엔드에서 받은 응답:", recommendedPerfumes);
        setRecommendedPerfumes(recommendedPerfumes); // 추천 결과 저장
        setIsModalOpen(true);
        console.log("handleRecommendationClick called");
      } catch (error) {
        console.error("향수 가져오지 못함");
        window.alert(error.message); // 사용자에게 오류 메시지 표시
        window.location.href = "/"; // 홈으로 이동
      }
      setIsLoading(false); // 응답을 받은 후 로딩 상태를 false로 설정
    } else {
      console.log("키워드 3개를 선택하세요.");
    }
  };

  const handleReset = () => {
    setIsModalOpen(false); // 모달 닫기
    setSelectedKeywords([]); // 선택된 키워드 초기화
    setRecommendedPerfumes([]); // 추천된 향수 목록 초기화
  };

  // 로딩 메시지 상태 추가
  const [loadingMessage, setLoadingMessage] = useState("");

  useEffect(() => {
    let intervalId;
    if (isLoading) {
      let count = 0;
      const messages = [
        "퓨미즈 AI가 선택 키워드를 기반으로 향수를 추천 중이에요!",
        "향수에 대해 잘 아시나요?",
        "향수의 향에 대해 이야기할 때 탑, 미들, 베이스 노트 라는 용어를 사용합니다.",
        "노트는 시간에 따른 향의 변화를 말합니다.",
        "탑노트는 뿌리고 15분 전후로 나는 향",
        "미들노트는 30분~1시간 전후로 나는 향",
        "베이스노트는 2~3시간 전후로 나는 향",
        "탑노트와 베이스노트의 향은 크게 차이날 수 있으므로 충분한 시향이 필요합니다.",
        "더 자세한 정보는 ABOUT 페이지에서 보실 수 있어요.",
        "즐거운 쇼핑 되시길 :)",
      ];
      setLoadingMessage(messages[0]);
      intervalId = setInterval(() => {
        count++;
        setLoadingMessage(messages[count % messages.length]);
      }, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading]);

  const navigate = useNavigate();

  const PerfumeList = ({ recommendedPerfumes }) => {
    return (
      <Modal
        show={isModalOpen} // 모달이 열려있는지 여부를 state에 따라 결정
        onHide={closeModal} // 모달을 닫기 위한 함수 설정
        dialogClassName="perfumeresult" // CSS 클래스
        size="xl"
      >
        <Row xs={2} md={4} lg={4} className={styles.row}>
          {recommendedPerfumes.map((perfume, index) => (
            <Col key={index} className={styles.mb4}>
              {" "}
              {/* 향수 카드를 매핑하는 컴포넌트에 Col 적용 */}
              <Card>
                <Card.Img variant="top" src={perfume.f_img} />
                <Card.Body>
                  <Card.Title className={styles["title"]}>
                    {perfume.f_name}
                  </Card.Title>
                  <Card.Text className={styles["text"]}>
                    {formatPrice(perfume.f_price)}원
                  </Card.Text>
                  <Card.Text className={styles["text"]}>
                    {perfume.f_brand}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className={styles.btn}
                    onClick={() => navigate(`/${perfume.f_id}`)}
                  >
                    MORE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* 다시하기 버튼을 맨 아래 한 번만 나타나도록 위치 조정 */}
        {recommendedPerfumes.length > 0 && (
          <div className="d-flex justify-content-center mb-3">
            <Button className={styles.aiBtn} onClick={handleReset}>
              다시 하기
            </Button>
          </div>
        )}
      </Modal>
    );
  };

  return (
    <div className={styles["main-page"]}>
      <div className={styles.main}>
        <div className={styles["left-section"]}>
          <img
            className={styles.mainimg}
            src="img/main1.png"
            alt="Left Section"
          />
        </div>

        <div className={styles["right-section"]}>
          <img
            className={styles.mainimg}
            src="https://web-resource.tamburins.com/assets/image/main/toilet_fragrance/pc_mainHero_right.jpg"
            alt="Right Section"
          />
        </div>
      </div>
      <button className={styles.gotoScent}>
        <Link to="/scent" style={{ textDecoration: "none", color: "#000" }}>
          제품 보기
        </Link>
      </button>

      <div className={styles.ai}>
        <h1>TODAY PERFUME</h1>

        {isLoading ? (
          <>
            <div className={styles["circle-spinner"]}>
              <span className={styles.loader}></span>
            </div>

            <p className={styles.p2}>{loadingMessage}</p></>
        ) : (
          <div>
            <p className={styles.p2}>오늘의 날씨와 기분에 따라 원하는 키워드 3가지를 선택해보세요.</p>
            <div className={styles["keyword-buttons"]}>
              {keywords.map((keyword, index) => {
                // 이전에 keyword가 #으로 시작하는지 확인
                const isHexColor = keyword.startsWith("#");
                // 버튼 스타일을 동적으로 설정
                const buttonStyle = isHexColor
                  ? { backgroundColor: keyword }
                  : {};

                // // 선택된 키워드인 경우 배경색과 글자색 변경
                // if (selectedKeywords.includes(keyword)) {
                //   buttonStyle.backgroundColor = "black";
                //   buttonStyle.color = "white";
                // }
                return (
                  <button
                    key={index}
                    className={styles.keyword}
                    onClick={() => handleKeywordClick(keyword)}
                    style={
                      selectedKeywords.includes(keyword)
                        ? { backgroundColor: "black", color: "white" }
                        : null
                    }
                  >
                    {isHexColor ? (
                      <>
                        <div
                          className={styles.colorCircle}
                          style={buttonStyle}
                        ></div>
                        <span className={styles.keywordText}>{keyword}</span>
                      </>
                    ) : (
                      <span className={styles.keywordText}>{keyword}</span>
                    )}
                  </button>
                );
              })}
              {/* 알림 메시지 출력 */}
              <p className={styles.p1}>{alertMessage}</p>
            </div>

            <button
              className={styles.aiBtn}
              onClick={handleRecommendationClick}
            >
              추천 향수 보기
            </button>
            {recommendedPerfumes && (
              <div>
                <PerfumeList recommendedPerfumes={recommendedPerfumes} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
