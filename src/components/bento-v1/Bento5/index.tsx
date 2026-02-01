import Image from "@/components/bento-v1/Image";
import styles from "./Bento5.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image
                src="/bento-v1-images/bento-5-grid.svg"
                width={352}
                height={352}
                alt=""
            />
        </div>
        <div className={styles.cursor}>
            <Image
                src="/bento-v1-images/bento-5-cursor.svg"
                width={20}
                height={20}
                alt=""
            />
        </div>
        <div className={styles.tooltip}>
            <span>40% Faster</span>
            <div className={styles.plus}>
                <Image
                    src="/bento-v1-images/bento-5-plus.svg"
                    width={8}
                    height={9}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.boxes}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
        </div>
    </div>
);

export default Bento;
