import Image from "@/components/bento-v1/Image";
import styles from "./Bento23.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.top}>
            <div className={styles.legend}>
                <div className={styles.item}>
                    <div className={styles.circle}>
                        <span></span>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.price}>$408.36</div>
                        <div className={styles.title}>Last month</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}>
                        <span></span>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.price}>$1,024</div>
                        <div className={styles.title}>This month</div>
                    </div>
                </div>
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-v1-images/bento-23-check.svg"
                    width={12}
                    height={12}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.chart}>
            <div className={styles.box}>
                <div className={styles.area}></div>
                <div className={styles.area}></div>
            </div>
            <div className={styles.box}>
                <div className={styles.area}></div>
                <div className={styles.area}></div>
            </div>
            <div className={styles.box}>
                <div className={styles.area}></div>
                <div className={styles.area}></div>
            </div>
            <div className={styles.box}>
                <div className={styles.area}></div>
                <div className={styles.area}></div>
            </div>
        </div>
        <div className={styles.lines}>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default Bento;
