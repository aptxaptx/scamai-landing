import Image from "@/components/bento-v1/Image";
import styles from "./Bento30.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.months}>
            <div className={styles.month}>Aug</div>
            <div className={styles.month}>Sep</div>
            <div className={styles.month}>Oct</div>
        </div>
        <div className={styles.grid}>
            <div className={styles.lines}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div className={styles.title}>
                        <span>Mobile app</span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.title}>
                        <span>Release Bento</span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.title}>
                        <span>UI elements</span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.title}>
                        <span>Core Dashboard v2</span>
                    </div>
                </div>
            </div>
            <div className={styles.cursor}>
                <Image
                    src="/bento-v1-images/bento-30-cursor.svg"
                    width={20}
                    height={20}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
