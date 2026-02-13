import styles from "./Bento47.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-47-main.svg"
                width={510}
                height={368}
                alt=""
            />
        </div>
        <div className={styles.center}>
            <div className={styles.boxes}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
            <div className={styles.block}>
                <div className={styles.inner}>
                    <div className={styles.figure}>
                        <Image
                            src="/bento-images/bento-47-figure.svg"
                            width={122}
                            height={113}
                            alt=""
                        />
                    </div>
                    <div className={styles.dots}>
                        <Image
                            src="/bento-images/bento-47-dots.svg"
                            width={61}
                            height={95}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.toggle}>
                    <div className={styles.indicator}>
                        <Image
                            src="/bento-images/bento-47-toggle-indicator.svg"
                            width={24}
                            height={24}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.numbers}>
            <span>
                01000010 01100101 01101110 01110100 01101111 00100000 01000100
                01100101 01110011 01101001 01100111 01101110 <br></br>
                <br></br>00100000 01010011 01111001 01110011 01110100 01100101
                01101101 00111010 00100000 01000011 01100001 01110010 01100100
                01110011
            </span>
        </div>
        <div className={styles.status}>
            <div className={styles.lines}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
);

export default Bento;
