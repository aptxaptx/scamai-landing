import Image from "@/components/bento-v1/Image";
import styles from "./Bento29.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-v1-images/bento-29-grid.svg"
                width={336}
                height={351}
                alt=""
            />
        </div>
        <div className={styles.circles}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
        <div className={styles.socials}>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-29-messenger.svg"
                    width={24}
                    height={24}
                    alt=""
                />
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-29-apple.svg"
                    width={28}
                    height={28}
                    alt=""
                />
            </div>
            <div className={styles.plus}>
                <Image
                    src="/bento-v1-images/bento-29-plus.svg"
                    width={20}
                    height={20}
                    alt=""
                />
                <div className={styles.dots}>
                    <div className={styles.dot}>
                        <span></span>
                    </div>
                    <div className={styles.dot}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-29-twitter.svg"
                    width={28}
                    height={28}
                    alt=""
                />
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-29-deviantart.svg"
                    width={24}
                    height={24}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.block}></div>
    </div>
);

export default Bento;
