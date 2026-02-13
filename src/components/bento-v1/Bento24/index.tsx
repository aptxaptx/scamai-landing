import Image from "@/components/bento-v1/Image";
import styles from "./Bento24.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.top}>
            <div className={styles.legend}>
                <div className={styles.item}>
                    <div className={styles.circle}></div>
                    <div className={styles.details}>
                        <div className={styles.price}>$408.36</div>
                        <div className={styles.title}>Last month</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}></div>
                    <div className={styles.details}>
                        <div className={styles.price}>$1,024</div>
                        <div className={styles.title}>This month</div>
                    </div>
                </div>
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-v1-images/bento-24-plus.svg"
                    width={12}
                    height={12}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.wrap}>
            <div className={styles.chart}>
                <Image
                    src="/bento-v1-images/bento-24-chart.svg"
                    width={336}
                    height={190}
                    alt=""
                />
            </div>
            <div className={styles.coordinate}>
                <div className={styles.dot}></div>
                <div className={styles.cursor}>
                    <Image
                        src="/bento-v1-images/bento-24-cursor.svg"
                        width={20}
                        height={20}
                        alt=""
                    />
                </div>
                <div className={styles.tooltip}>
                    <span>$1,024</span>
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
