import styles from "./Bento2.module.sass";
import Image from "@/components/bento-v1/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.range}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.top}>
            <div className={styles.wrap}>
                <div className={styles.title}>1,632</div>
                <div className={styles.info}>
                    <div className={styles.circle}></div>Clicks
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}> </div>
                <div className={styles.box}> </div>
            </div>
        </div>
        <div className={styles.chart}>
            <Image
                src="/bento-v1-images/bento-2-chart.svg"
                width={336}
                height={219}
                alt=""
            />
            <div className={styles.details}>
                <div className={styles.pin}>
                    <Image
                        src="/bento-v1-images/bento-2-pin.svg"
                        width={12}
                        height={11}
                        alt=""
                    />
                </div>
                <div className={styles.coordinate}>
                    <div className={styles.dot}></div>
                    <div className={styles.cursor}>
                        <Image
                            src="/bento-v1-images/bento-2-cursor.svg"
                            width={20}
                            height={21}
                            alt=""
                        />
                    </div>
                    <div className={styles.tooltip}>
                        <span>Chrome</span>
                        <div className={styles.plus}>
                            <Image
                                src="/bento-v1-images/bento-2-plus.svg"
                                width={8}
                                height={9}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
