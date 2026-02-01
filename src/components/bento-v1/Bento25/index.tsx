import Image from "@/components/bento-v1/Image";
import styles from "./Bento25.module.sass";

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
                src="/bento-v1-images/bento-25-grid.svg"
                width={336}
                height={336}
                alt=""
            />
        </div>
        <div className={styles.box}>
            <div className={styles.format}>4K</div>
            <div className={styles.play}>
                <Image
                    src="/bento-v1-images/bento-25-play.svg"
                    width={16}
                    height={16}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
