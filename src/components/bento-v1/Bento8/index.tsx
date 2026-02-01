import Image from "@/components/bento-v1/Image";
import styles from "./Bento8.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.folder}>
                    <Image
                        src="/bento-v1-images/bento-8-folder.svg"
                        width={48}
                        height={60}
                        alt=""
                    />
                </div>
                <div className={styles.wrap}>
                    <div className={styles.line}></div>
                    <div className={styles.progress}>
                        <div
                            className={styles.box}
                            style={{ width: "70%" }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.folder}>
                    <Image
                        src="/bento-v1-images/bento-8-folder.svg"
                        width={48}
                        height={60}
                        alt=""
                    />
                </div>
                <div className={styles.wrap}>
                    <div className={styles.line}></div>
                    <div className={styles.progress}>
                        <div
                            className={styles.box}
                            style={{ width: "50%" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.foot}>
            <div className={styles.in}></div>
            <div className={styles.folder}>
                <Image
                    src="/bento-v1-images/bento-8-folder-with-plus.svg"
                    width={48}
                    height={60}
                    alt=""
                />
                <div className={styles.cursor}>
                    <Image
                        src="/bento-v1-images/bento-8-cursor.svg"
                        width={20}
                        height={20}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
