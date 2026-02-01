import Image from "@/components/bento-v1/Image";
import styles from "./Bento21.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.grid}>
            <Image
                src="/bento-v1-images/bento-21-grid.svg"
                width={336}
                height={336}
                alt=""
            />
        </div>
        <div className={styles.avatar}>
            <Image
                src="/bento-v1-images/bento-21-avatar.png"
                width={124}
                height={124}
                alt=""
            />
        </div>
    </div>
);

export default Bento;
