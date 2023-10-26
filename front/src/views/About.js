import { Button } from 'react-bootstrap';

import React from 'react';
import Stack from 'react-bootstrap/Stack';
import styles from './About.module.css';
function App() {

    return (
        <div className={styles.amain}>
            <Stack gap={8}>
                <div className={styles.asection}>
                    <div>
                        <div className={styles.acont}>
                            <h1 className={styles.atitle}>ABOUT PERFUME</h1>
                            <div>
                                <h1 className={styles.mtitle}>Much More
                                </h1>
                                <h1 className={styles.mtitle}>Than Perfume
                                </h1>
                                <Button className={styles.btn1} variant="outline-light">GO SHOP</Button>
                                <Button variant="outline-light">Recommend AI</Button></div>
                        </div>
                        <div>
                            <img className={styles.aboutimg} src="img/about_perfume.png" alt="aboutimg" />
                        </div> </div>
                </div>
                <div className="p-2">
                    <p className={styles.perfumetext}>Do you know Perfume?</p>
                    <div className={styles.perfumecontent}>
                        <p>여러분들은 향수에 대해 잘 아시나요?</p>
                        <p>Every flower has its perfume.</p>
                        <p>"모든 꽃은 제각기 향이 있다." 터키 속담 입니다.</p>
                        <p>우리도 제각기의 향이 있습니다.</p>
                        <p>향수의 종류가 너무 많아 헷갈리는 분들, <br>
                        </br>향수에 대한 정보를 알고 싶으신 분들, <br>
                            </br> FUMEASE 에서 더 많은 정보를 알아가세요.</p>
                    </div>
                </div>
                <div class={styles.jb}></div>
                <div className={styles.test}>
                    <div>
                        <p className={styles.notetext}>노트에 대해 아시나요?</p>
                        <img className={styles.noteimg} src="img/note.png" alt="noteimg" />
                        <p className={styles.notecontent}>
                            향수의 향에 대해 이야기할 때탑, 미들, 베이스 노트 라는 용어를 사용합니다.
                            <br></br>
                            노트는 시간에 따른 향의 변화를 말합니다.
                            <br></br>
                            탑노트는 뿌리고 15분 전후로 나는 향
                            <br></br>
                            미들노트는 30분~1시간 전후로 나는 향
                            <br></br>
                            베이스노트는 2~3시간 전후로 나는 향
                            <br></br>
                            탑노트와 베이스노트의 향은 크게 차이날 수 있으므로 충분한 시향이 필요합니다.</p>
                    </div>
                </div>

                <div class={styles.jb}></div>

                <div className="p-4">
                    <h3 className={styles.perfumename}>PERFUME</h3>
                    <img className={styles.perfumeimg} src="img/perfume_represent.png" alt="perfumeimg" />
                    <p>향수 중 가장 진한 계열으로,
                        향 첨가율이 15~30%이며 최대 12시간까지 지속됩니다.<br></br>
                        농도가 높고 향이 진하기 때문에 소량만으로도 강한 향을 풍깁니다. <br></br>
                        향수 입문자 보다는 좋아하는 향이 뚜렷한 사람에게 추천합니다.</p>
                </div>

                <div class={styles.jb}></div>

                <div className="p-5">
                    <h3 className={styles.perfumename}>오 드 퍼퓸 (EDP) </h3>
                    <h3 className={styles.perfumename}>Eau De Perfume </h3>
                    <img className={styles.edpimg} src="img/edp.png" alt="edpimg" />
                    <p>향 첨가율이 8~15%이며, 최대 8시간동안 지속됩니다. <br></br>
                        대중들이 가장 선호하는 향과 지속력을 가지고 있습니다.<br></br>
                        시중에 출시되는 향수는 오드퍼퓸이 많습니다.</p>
                </div>

                <div class={styles.jb}></div>

                <div className="p-6">
                    <h3 className={styles.perfumename}>오 드 뚜알렛 (EDT) </h3>
                    <h3 className={styles.perfumename}>Eau De Toillete </h3>
                    <img className={styles.edtimg} src="img/edt.png" alt="edtimg" />
                    <p>오드퍼퓸보다 약한 계열의 향수입니다. <br></br>
                        향 첨가율 4~8%이며, 5~8시간 동안 지속됩니다. <br></br>
                        부드럽고 약한 향으로 향수 입문자들에게 추천합니다.</p>
                </div>

                <div class={styles.jb}></div>

                <div className="p-7">
                    <h3 className={styles.perfumename}>오 드 코롱 (EDC) </h3>
                    <h3 className={styles.perfumename}>Eau De Cologne </h3>
                    <img className={styles.edcimg} src="img/edc.png" alt="edcimg" />
                    <p>진한 향보다는 은은한 향을 풍깁니다.
                        향 첨가율 3~5%이며, 최대 4시간동안 지속됩니다. <br></br>
                        데일리로 가볍게 뿌리기 좋으며,<br></br>
                        화장실 혹은 거실에 리빙 퍼퓸으로 뿌리기 좋습니다.</p>
                </div>

                <div class={styles.jb}></div>

                <div className="p-8">
                    <h3 className={styles.perfumename}>샤워코롱</h3>
                    <img className={styles.showerimg} src="img/shower.png" alt="showerimg" />
                    <p>바디미스트와 동일하다고 볼 수 있습니다. <br></br>
                        지속시간 1시간으로 향이 아주 약한 향수이며,<br></br>
                        목욕 후 몸에 뿌리거나 방향제처럼 자주 뿌려도 부담이 적은 향수입니다.</p>
                </div>

            </Stack></div>
    );
}



export default App;