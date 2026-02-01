import styles from "./Bento46.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-46-main.svg"
                width={368}
                height={406}
                alt=""
            />
        </div>
        <div className={styles.block}>
            <div className={styles.inner}>
                <div className={styles.wrap}>
                    <div className={styles.title}>AI</div>
                    <div className={styles.lines}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.robot}>
                <div className={styles.eyes}>
                    <div className={styles.eye}></div>
                    <div className={styles.eye}></div>
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
