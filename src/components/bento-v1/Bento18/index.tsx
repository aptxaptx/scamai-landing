import Image from "@/components/bento-v1/Image";
import styles from "./Bento18.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <div className={styles.lines}>
                <div className={styles.horizontal}>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.vertical}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div className={styles.folder}>
            <Image
                src="/bento-v1-images/bento-18-folder.svg"
                width={188}
                height={145}
                alt=""
            />
        </div>
        <div className={styles.cursor}>
            <Image
                src="/bento-v1-images/bento-18-cursor.svg"
                width={20}
                height={20}
                alt=""
            />
            <div className={styles.tooltip}>Artur</div>
        </div>
    </div>
);

export default Bento;
