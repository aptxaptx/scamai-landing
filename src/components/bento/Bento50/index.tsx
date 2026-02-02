import styles from "./Bento50.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-50-main.svg"
                width={451}
                height={603}
                alt=""
            />
        </div>
        <div className={styles.monitor}>
            <div className={styles.lines}>
                <Image
                    src="/bento-images/bento-50-lines.svg"
                    width={157}
                    height={50}
                    alt=""
                />
            </div>
            <div className={styles.screen}>
                <div className={styles.check}>
                    <Image
                        src="/bento-images/bento-50-check.svg"
                        width={17}
                        height={13}
                        alt=""
                    />
                </div>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <div className={styles.letter}>Real</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.letter}>Fake</div>
                    </div>
                </div>
            </div>
            <div className={styles.stand}>
                <div className={styles.foot}></div>
            </div>
        </div>
    </div>
);

export default Bento;
