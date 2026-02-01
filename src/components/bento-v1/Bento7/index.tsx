import Image from "@/components/bento-v1/Image";
import styles from "./Bento7.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.boxes}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
        </div>
        <div className={styles.block}>
            <div className={styles.line}></div>
            <div className={styles.in}></div>
        </div>
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.circle}>
                    <Image
                        src="/bento-v1-images/bento-7-plus.svg"
                        width={8}
                        height={8}
                        alt=""
                    />
                </div>
                <div className={styles.lines}>
                    <div className={styles.line}></div>
                    <div className={styles.line} style={{ width: "38%" }}></div>
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}>
                    <Image
                        src="/bento-v1-images/bento-7-plus.svg"
                        width={8}
                        height={8}
                        alt=""
                    />
                </div>
                <div className={styles.lines}>
                    <div className={styles.line}></div>
                    <div className={styles.line} style={{ width: "64%" }}></div>
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}>
                    <Image
                        src="/bento-v1-images/bento-7-plus.svg"
                        width={8}
                        height={8}
                        alt=""
                    />
                </div>
                <div className={styles.lines}>
                    <div className={styles.line}></div>
                    <div className={styles.line} style={{ width: "38%" }}></div>
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}>
                    <Image
                        src="/bento-v1-images/bento-7-plus.svg"
                        width={8}
                        height={8}
                        alt=""
                    />
                </div>
                <div className={styles.lines}>
                    <div className={styles.line}></div>
                    <div className={styles.line} style={{ width: "64%" }}></div>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    </div>
);

export default Bento;
