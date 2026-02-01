import Image from "@/components/bento-v1/Image";
import styles from "./Bento17.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.top}>
            <div className={styles.details}>
                <div className={styles.title}>68%</div>
                <div className={styles.info}>
                    <div className={styles.circle}></div>Engagement rate
                </div>
            </div>
            <div className={styles.box}></div>
        </div>
        <div className={styles.body}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.percent}>40%</div>
                    <div className={styles.balls}>
                        <Image
                            src="/bento-v1-images/bento-17-balls-1.svg"
                            width={40}
                            height={58}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.percent}>15%</div>
                    <div className={styles.balls}>
                        <Image
                            src="/bento-v1-images/bento-17-balls-2.svg"
                            width={40}
                            height={28}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.percent}>68%</div>
                    <div className={styles.balls}>
                        <Image
                            src="/bento-v1-images/bento-17-balls-3.svg"
                            width={43}
                            height={91}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.percent}>24%</div>
                    <div className={styles.balls}>
                        <Image
                            src="/bento-v1-images/bento-17-balls-4.svg"
                            width={45}
                            height={36}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={styles.line}>
                <Image
                    src="/bento-v1-images/bento-17-line.svg"
                    width={323}
                    height={2}
                    alt=""
                />
            </div>
            <div className={styles.marker}>
                <Image
                    src="/bento-v1-images/bento-17-marker.svg"
                    width={15}
                    height={14}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
