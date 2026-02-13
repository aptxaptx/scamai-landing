import Image from "@/components/bento-v1/Image";
import styles from "./Bento19.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
                <div className={styles.price}>$128.00</div>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}>
                    <span></span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.price}>$88.00</div>
            </div>
        </div>
        <div className={styles.boxes}>
            <div className={styles.box}>
                <div className={styles.check}>
                    <Image
                        src="/bento-v1-images/bento-19-check.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                <div className={styles.lines}></div>
            </div>
            <div className={styles.box}>
                <div className={styles.check}>
                    <Image
                        src="/bento-v1-images/bento-19-check.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                <div className={styles.lines}></div>
            </div>
            <div className={styles.box}>
                <div className={styles.check}>
                    <Image
                        src="/bento-v1-images/bento-19-check.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                <div className={styles.lines}></div>
            </div>
            <div className={styles.box}>
                <div className={styles.check}>
                    <Image
                        src="/bento-v1-images/bento-19-check.svg"
                        width={24}
                        height={24}
                        alt=""
                    />
                </div>
                <div className={styles.lines}></div>
            </div>
        </div>
        <div className={styles.block}></div>
    </div>
);

export default Bento;
