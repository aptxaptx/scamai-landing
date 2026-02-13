import styles from "./Bento41.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-images/bento-41-grid.svg"
                width={368}
                height={520}
                alt=""
            />
        </div>
        <div className={styles.circles}>
            <div className={styles.circle}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.circle}>
                <span></span>
                <span></span>
                <span></span>
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
        <div className={styles.monitor}>
            <div className={styles.screen}>
                <div className={styles.inner}>
                    <div className={styles.boxes}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.square}>
                <div className={styles.in}></div>
                <div className={styles.play}>
                    <Image
                        src="/bento-images/bento-41-play.svg"
                        width={16}
                        height={18}
                        alt=""
                    />
                </div>
                <div className={styles.dots}>
                    <Image
                        src="/bento-images/bento-41-dots.svg"
                        width={55}
                        height={27}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.foot}>
                <Image
                    src="/bento-images/bento-41-foot.svg"
                    width={148}
                    height={17}
                    alt=""
                />
            </div>
            <div className={styles.foot}>
                <Image
                    src="/bento-images/bento-41-foot.svg"
                    width={148}
                    height={17}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.balls}>
            <div className={styles.ball}>
                <span></span>
            </div>
            <div className={styles.ball}>
                <span></span>
            </div>
        </div>
    </div>
);

export default Bento;
