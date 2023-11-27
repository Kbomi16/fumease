// Home.js
import React from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "./Home.module.css"; // styles를 import
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import Modal from 'react-modal';


const Home = () => {
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

  // 사용자가 선택한 향수 추천 결과를 저장하는 상태
  const [recommendedPerfumes, setRecommendedPerfumes] = useState([]);

  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 관리하는 state

  // GPT-4에게 향수 추천을 요청하는 함수
  const handleRecommendationClick = async () => {
    if (selectedKeywords.length === 3) {
      setIsLoading(true); // 데이터를 가져오기 전에 로딩 상태를 true로 설정
      setIsModalOpen(true);
      try {
        // selectedKeywords를 쉼표로 구분된 문자열로 변환
        const keywordString = selectedKeywords.join(",");
        const response = await axios.get(
          `http://localhost:3001/chatgpt?selectedKeywords=${keywordString}`
        );
        const recommendedPerfumes = response.data;
        setRecommendedPerfumes(recommendedPerfumes); // 추천 결과 저장
        setIsModalOpen(true);
        console.log("handleRecommendationClick called")
      } catch (error) {
        console.error("향수 가져오지 못함");
      }
      setIsLoading(false); // 응답을 받은 후 로딩 상태를 false로 설정
      
    } else {
      console.log("키워드 3개를 선택하세요.");
    }
  };

  const handleReset = () => {
    setIsModalOpen(false); // 모달을 닫습니다.
    setSelectedKeywords([]); // 선택된 키워드를 초기화합니다.
    setRecommendedPerfumes([]); // 추천된 향수 목록을 초기화합니다.
  };

  const PerfumeList = ({ recommendedPerfumes }) => {
    return (
      <Modal
  className="perfumeresult"
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    content: {
      position: 'relative',
      top: '5%',
      left: '10%',
      width: '80%',
      height: '90%',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none'
    },
  }}
>
        <Row xs={2} md={4} lg={4} className={styles.row}> 
        {recommendedPerfumes.map((perfume, index) => (
        <Col key={index} className={styles.mb4}> {/* 향수 카드를 매핑하는 컴포넌트에 Col 적용 */}
          <Card>
            <Card.Img variant="top" src={perfume.f_img}/>
            <Card.Body>
              <Card.Title className={styles['title']}>{perfume.f_name}</Card.Title>
              <Card.Text className={styles['text']}>{perfume.f_price}원</Card.Text>
              <Card.Text className={styles['text']}>{perfume.f_brand}</Card.Text>
              <Button variant="primary" className={styles.btn} onClick={() => Navigate(`/${perfume.f_id}`)}>MORE</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
      {/* 다시하기 버튼을 맨 아래 한 번만 나타나도록 위치 조정 */}
      {recommendedPerfumes.length > 0 && (
          <Button className={styles.aiBtn} onClick={handleReset}>다시 하기</Button>
      )}
        
      </Modal>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <p>퓨미즈 AI가 선택 키워드를 기반으로 향수를 추천 중이에요! 조금만 기다려주세요...</p>
        ) : (
          <div>
            <p>오늘의 날씨와 기분에 따라 원하는 키워드 3가지를 선택해보세요.</p>
            <div className={styles["keyword-buttons"]}>
              {keywords.map((keyword, index) => {
                // 이전에 keyword가 #으로 시작하는지 확인
                const isHexColor = keyword.startsWith("#");
                // 버튼 스타일을 동적으로 설정
                const buttonStyle = isHexColor
                  ? { backgroundColor: keyword }
                  : {};

                // hex값이 검정색인 경우 글자 색을 흰색으로 설정
                if (isHexColor && keyword === "#000000") {
                  buttonStyle.color = "white";
                }

                // 선택된 키워드인 경우 배경색과 글자색 변경
                if (selectedKeywords.includes(keyword)) {
                  buttonStyle.backgroundColor = "black";
                  buttonStyle.color = "white";
                }
                return (
                  <button
                    key={index}
                    id={keyword}
                    className={styles.keyword}
                    style={buttonStyle}
                    onClick={() => handleKeywordClick(keyword)}
                  >
                    {keyword}
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
