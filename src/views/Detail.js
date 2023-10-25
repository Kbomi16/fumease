import React from 'react';
import Stack from 'react-bootstrap/Stack';
import styles from './Detail.module.css';

function App() {
    return (
        <div className={styles.amain}>

            <Stack gap={4}>
                <div className="p-2">
                    <div className={styles.dtitle}>
                        <h1 className={styles.detailmtitle}>What is
                        </h1>
                        <h1 className={styles.detailmtitle}>This
                        </h1>
                        <h1 className={styles.detailmtitle}>Perfume?
                        </h1></div>
                    <div>
                        <img className={styles.brandimg} src="img/perfume_chamo.jpeg" alt="chamo" />
                    </div>
                    <div>
                        <p className={styles.brandname}>탬버린즈</p>
                    </div>


                </div>

                <div className={styles.middlecontent}>
                    <img className={styles.productimg} src="img/edc.png" alt="aimg" />
                    <h3>퍼퓸 카모</h3>
                    <h3>139,000원</h3>
                </div>

                <div className="p-2">
                    <Stack direction="horizontal" gap={3} className={styles.notebest}>
                        <div className="p-2 ">
                            <img className={styles.noteimg} src="img/만다린.jpeg" alt="aimg" />
                        </div>
                        <div className="p-2 ">
                            <img className={styles.noteimg} src="img/basil.jpeg" alt="aimg" />
                        </div>
                        <div className="p-2 ">
                            <img className={styles.noteimg} src="img/amberwood.jpeg" alt="aimg" />
                        </div>
                    </Stack>
                    <Stack direction="horizontal" gap={3} className={styles.textbest}>
                        <div className="p-2">
                            <p>Top Note</p>
                        </div>
                        <div className="p-2">
                            <p>Middle Note</p>

                        </div>
                        <div className="p-2">
                            <p>Base Note</p>

                        </div>
                    </Stack>
                </div>
                <div className={styles.thirdcontent}>
                    꿀처럼 진득하고 달콤한 카모마일과 씁쓸한 클라리세이지의 허브 향이 오묘한 조화를 이루어 중독성 있는 향을 선사합니다.<br>
                    </br>
                    자칫 차갑게 느껴질 수 있는 촉촉한 이끼의 느낌을 우아하고
                    <br></br>
                    부드러운 나무결의 블론드 우드와 따뜻한 머스크로 감싸주어 당신의 지친 마음에 특별하고 작은 위안을 선물합니다.                </div>

            </Stack>
        </div>
    );
}

export default App;
