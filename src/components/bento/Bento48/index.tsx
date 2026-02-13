import styles from "./Bento48.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-48-main.svg"
                width={453}
                height={675}
                alt=""
            />
        </div>
        <div className={styles.icons}>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-48-icon-1.svg"
                    width={24}
                    height={24}
                    alt=""
                />
            </div>
            <div className={styles.icon}>
                <Image
                    src="/bento-images/bento-48-icon-2.svg"
                    width={24}
                    height={24}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
