import Image from "@/components/bento-v1/Image";
import styles from "./Bento14.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.lines}></div>
        <div className={styles.wrap}>
            <div className={styles.list}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
            <div className={styles.avatar}>
                <Image
                    src="/bento-v1-images/bento-14-avatar.png"
                    width={108}
                    height={128}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.pagination}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default Bento;
