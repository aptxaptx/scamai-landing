import styles from "./Bento42.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-images/bento-42-grid.svg"
                width={368}
                height={475}
                alt=""
            />
        </div>
        <div className={styles.center}>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div className={styles.dots}>
                        <div className={styles.circle}></div>
                        <div>
                            <div className={styles.dot}>
                                <Image
                                    src="/bento-images/bento-42-dots.svg"
                                    width={50}
                                    height={27}
                                    alt=""
                                />
                            </div>
                            <div className={styles.dot}>
                                <Image
                                    src="/bento-images/bento-42-dots.svg"
                                    width={50}
                                    height={27}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.balls}>
                        <div className={styles.line}>
                            <Image
                                src="/bento-images/bento-42-line.svg"
                                width={50}
                                height={50}
                                alt=""
                            />
                        </div>
                        <div>
                            <div className={styles.ball}>
                                <div className={styles.in}>
                                    <span></span>
                                </div>
                            </div>
                            <div className={styles.ball}></div>
                            <div className={styles.ball}></div>
                            <div className={styles.ball}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.lines}>
                        <Image
                            src="/bento-images/bento-42-lines.svg"
                            width={152}
                            height={96}
                            alt=""
                        />
                    </div>
                    <div className={styles.toggle}>
                        <Image
                            src="/bento-images/bento-42-toggle.svg"
                            width={54}
                            height={54}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
