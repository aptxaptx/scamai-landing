import Image from "@/components/bento-v1/Image";
import styles from "./Bento16.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.row}>
            <div className={styles.col}></div>
            <div className={styles.col}>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.plus}></div>
                    </div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
            </div>
        </div>
        <div className={styles.box}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.cursor}>
            <Image
                src="/bento-v1-images/bento-16-cursor.svg"
                width={21}
                height={20}
                alt=""
            />
        </div>
    </div>
);

export default Bento;
