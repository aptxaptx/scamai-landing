import Image from "@/components/bento-v1/Image";
import styles from "./Bento20.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.group}>
            <div className={styles.file}>
                <div className={styles.folder}>
                    <Image
                        src="/bento-v1-images/bento-20-folder.svg"
                        width={48}
                        height={60}
                        alt=""
                    />
                    <div className={styles.format}>
                        <span>DOC</span>
                    </div>
                </div>
            </div>
            <div className={styles.arrow}>
                <div className={styles.icon}>
                    <Image
                        src="/bento-v1-images/bento-20-arrow.svg"
                        width={16}
                        height={16}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.file}>
                <div className={styles.folder}>
                    <Image
                        src="/bento-v1-images/bento-20-folder.svg"
                        width={48}
                        height={60}
                        alt=""
                    />
                    <div className={styles.format}>
                        <span>MP4</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.group}>
            <div className={styles.signal}>
                <Image
                    src="/bento-v1-images/bento-20-signal.svg"
                    width={296}
                    height={112}
                    alt=""
                />
            </div>
            <div className={styles.block}></div>
        </div>
    </div>
);

export default Bento;
