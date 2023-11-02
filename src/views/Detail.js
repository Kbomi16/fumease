import React, { useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import styles from './Detail.module.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className={styles.amain}>

      <Stack gap={4}>


        <Stack direction="horizontal" gap={3}>
          <div className="p-2">
            <img className={styles.aimg} src="logo/aesop_logo.png" alt="aesop" />
          </div>
          <div className="p-2">
            <img className={styles.brandimg} src="img/aesop_rose_edp.avif" alt="aesop_rose" />
          </div>
          <div className={styles.brandcont}>
            <h3 className={styles.name}>로즈 오드 퍼퓸</h3>
            <p>장미 향이지만 활기찬 시소 향, 우드, 스파이스, 흙내음,<br>
            </br> 가벼운 스모크가 더해진 미묘하고 <br>
              </br>풍성한 노트로 부드러우면서 강렬한 향수
            </p>
            <p className={styles.c}>사이즈</p>
            <p>50ml</p>
            <div className={styles.jb}></div>

            <h3 className={styles.price}>210,000</h3>
            <Button variant="outline-dark" className={styles.add}>장바구니 추가</Button>

            <div className={styles.jb}></div>
            <p className={styles.c} >향</p>
            <p>플로럴, 그린, 우디</p>
            <div class={styles.jb}></div>
            <p className={styles.c}>노트</p>
            <p>Top note: Middel Note: Base Note:</p>
          </div>

        </Stack>




      </Stack>
    </div >
  );
}

export default App;
