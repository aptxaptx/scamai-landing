import styles from "./Bento51.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-51-main.svg"
                width={430}
                height={512}
                alt=""
            />
        </div>
        <div className={styles.icons}>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-51-flag.svg"
                    width={16}
                    height={17}
                    alt=""
                />
            </div>
            <div className={styles.icon}>
                <div className={styles.in}>
                    <div className={styles.pause}></div>
                </div>
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-51-check.svg"
                    width={17}
                    height={17}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.monitor}>
            <div className={styles.screen}>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.foot}>
                <div className={styles.inner}>
                    <div className={styles.block}></div>
                    <div className={styles.lines}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.dots}>
                <Image
                    src="/bento-images/bento-51-dots.svg"
                    width={248}
                    height={83}
                    alt=""
                />
            </div>
            <div className={styles.toggle}>
                <Image
                    src="/bento-images/bento-51-toggle.svg"
                    width={847}
                    height={106}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.numbers}>
            <span>
                01000010 01100101 01101110 01110100 01101111 00100000 01000100
                01100101 01110011 01101001 01100111 01101110 <br></br>
                <br></br>00100000 01010011 01111001 01110011 01110100 01100101
                01101101 00111010 00100000
            </span>
        </div>
    </div>
);

export default Bento;
