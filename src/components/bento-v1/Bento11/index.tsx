import Image from "@/components/bento-v1/Image";
import styles from "./Bento11.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.socials}>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-11-messenger.svg"
                    width={32}
                    height={32}
                    alt=""
                />
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-11-apple.svg"
                    width={32}
                    height={32}
                    alt=""
                />
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-11-yelp.svg"
                    width={32}
                    height={32}
                    alt=""
                />
            </div>
            <div className={styles.plus}>
                <div className={styles.inner}></div>
                <Image
                    src="/bento-v1-images/bento-11-plus.svg"
                    width={12}
                    height={12}
                    alt=""
                />
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-11-deviantart.svg"
                    width={32}
                    height={32}
                    alt=""
                />
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-11-twitter.svg"
                    width={32}
                    height={32}
                    alt=""
                />
            </div>
            <div className={styles.social}>
                <Image
                    src="/bento-v1-images/bento-11-instagram.svg"
                    width={32}
                    height={32}
                    alt=""
                />
            </div>
        </div>
        <div className={styles.circles}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
    </div>
);

export default Bento;
