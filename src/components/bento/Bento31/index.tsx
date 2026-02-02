import styles from "./Bento31.module.sass";
import Image from "@/components/bento/Image";

const Bento = () => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-images/bento-31-grid.svg"
                width={368}
                height={520}
                alt=""
            />
        </div>
        <div className={styles.circles}>
            <div className={styles.circle}></div>
            <div className={styles.circle}>
                <span></span>
            </div>
        </div>
        <div className={styles.code}>
            <span>01111001 01110011</span>
        </div>
        <div className={styles.numbers}>
            <span>
                01000010 01100101 01101110 01110100 01101111 00100000 01000100
                01100101 01110011 01101001 01100111 01101110 00100000 01010011
                01111001 01110011 01110100 01100101 01101101 00111010 00100000
                01000011 01100001 01110010 01100100 01110011
            </span>
        </div>
        <div className={styles.box}>
            <div className={styles.arrows}>
                <div className={styles.arrow}>
                    <Image
                        src="/bento-images/bento-31-arrow-1.svg"
                        width={16}
                        height={16}
                        alt=""
                    />
                </div>
                <div className={styles.arrow}>
                    <Image
                        src="/bento-images/bento-31-arrow-2.svg"
                        width={16}
                        height={16}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.inner}></div>
            <div className={styles.dots}>
                <Image
                    src="/bento-images/bento-31-dots.svg"
                    width={101}
                    height={83}
                    alt=""
                />
            </div>
            <div className={styles.square}>
                <span>4x</span>
            </div>
            <div className={styles.block}>
                <span></span>
            </div>
        </div>
    </div>
);

export default Bento;
