import React from 'react';
import './styles.css';
function Footer() {
    const words = ['회사소개', '공지사항', '연락처', '광고문의', '채용', '| 버그제보 |', '개인정보 처리방침', '서비스 이용약관'];

    return (
        <footer className="footer">
            <img className="footerlogo" src="fumease-logo.png" alt="이미지 설명" />
            <div >
                <p className='text'>사용자 맞춤 AI로 향수 쇼핑을 쉽게</p>

                <div className="word-container">
                    {words.map((word, index) => (
                        <span key={index} className="word">{word}</span>
                    ))}
                </div>
                <div className='ftext'>
                    <p> 상호명: (주)퓨미즈 | 대표명: 김보미 | 사업자등록번호 : 2023541005 | 문의 : pumease@pumease.kr</p>
                    <p className='ft1'> 통신판매업신고번호: 제 2023-서울 | 주소 : 서울특별시 서대문구 가좌로 134 정보통신공학과</p>
                    <p className='ft2'> 2023 (주)퓨미즈, Inc. All rights reserved.ç</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
