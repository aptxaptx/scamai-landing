import styles from "./Bento60.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-60-main.svg"
                width={730}
                height={734}
                alt=""
            />
        </div>
        <div className={styles.monitor}>
            <div className={styles.screen}>
                <div className={styles.circle}></div>
                <div className={styles.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <Image
                            src="/bento-images/bento-60-stars.svg"
                            width={28}
                            height={28}
                            alt=""
                        />
                    </div>
                    <div className={styles.lines}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.boxes}>
            <div className={styles.box}>
                <Image
                    src="/bento-images/bento-60-star.svg"
                    width={16}
                    height={16}
                    alt=""
                />
            </div>
            <div className={styles.box}>
                <div className={styles.lines}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
