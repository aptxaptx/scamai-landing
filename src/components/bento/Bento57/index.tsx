import styles from "./Bento57.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-57-main.svg"
                width={336}
                height={672}
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
        <div className={styles.monitor}>
            <div className={styles.screen}>
                <div className={styles.boxes}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.foot}>
                <Image
                    src="/bento-images/bento-57-foot.svg"
                    width={148}
                    height={17}
                    alt=""
                />
            </div>
            <div className={styles.foot}>
                <Image
                    src="/bento-images/bento-57-foot.svg"
                    width={148}
                    height={17}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.icons}>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-57-icon-1.svg"
                    width={17}
                    height={18}
                    alt=""
                />
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-57-icon-2.svg"
                    width={20}
                    height={20}
                    alt=""
                />
                <div className={styles.magnifier}>
                    <Image
                        src="/bento-images/bento-57-magnifier.svg"
                        width={57}
                        height={57}
                        alt=""
                    />
                </div>
                <div className={styles.magnifier}>
                    <Image
                        src="/bento-images/bento-57-magnifier.svg"
                        width={57}
                        height={57}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-57-icon-3.svg"
                    width={17}
                    height={17}
                    alt=""
                />
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-57-icon-4.svg"
                    width={17}
                    height={17}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
