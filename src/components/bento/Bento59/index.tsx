import styles from "./Bento59.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-59-main.svg"
                width={512}
                height={512}
                alt=""
            />
        </div>
        <div className={styles.icons}>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-59-icon-1.svg"
                    width={16}
                    height={20}
                    alt=""
                />
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-59-icon-2.svg"
                    width={24}
                    height={24}
                    alt=""
                />
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-59-icon-3.svg"
                    width={17}
                    height={20}
                    alt=""
                />
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-59-icon-4.svg"
                    width={24}
                    height={24}
                    alt=""
                />
                <div className={styles.circle}></div>
            </div>
        </div>
    </div>
);

export default Bento;
