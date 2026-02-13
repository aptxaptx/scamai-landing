import styles from "./Bento44.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-44-main.svg"
                width={368}
                height={453}
                alt=""
            />
        </div>
        <div className={styles.smiles}>
            <div className={styles.smile}>
                <Image
                    src="/bento-images/bento-44-smile-1.svg"
                    width={17}
                    height={17}
                    alt=""
                />
            </div>
            <div className={styles.smile}>
                <div className={styles.in}>
                    <Image
                        src="/bento-images/bento-44-smile-2.svg"
                        width={16}
                        height={16}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.smile}>
                <Image
                    src="/bento-images/bento-44-smile-3.svg"
                    width={16}
                    height={16}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.monitor}>
            <div className={styles.lines}>
                <Image
                    src="/bento-images/bento-44-lines.svg"
                    width={36}
                    height={48}
                    alt=""
                />
            </div>
            <div className={styles.screen}>
                <div className={styles.inner}></div>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <div className={styles.blocks}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.blocks}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
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
