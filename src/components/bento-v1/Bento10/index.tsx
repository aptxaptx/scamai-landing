import Image from "@/components/bento-v1/Image";
import styles from "./Bento10.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <div className={styles.cells}>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
            </div>
            <div className={styles.avatars}>
                <div className={styles.avatar}>
                    <Image
                        src="/bento-v1-images/bento-10-avatar-1.png"
                        width={58}
                        height={58}
                        alt=""
                    />
                </div>
                <div className={styles.avatar}>
                    <Image
                        src="/bento-v1-images/bento-10-avatar-2.png"
                        width={58}
                        height={58}
                        alt=""
                    />
                </div>
                <div className={styles.avatar}>
                    <Image
                        src="/bento-v1-images/bento-10-avatar-3.png"
                        width={58}
                        height={58}
                        alt=""
                    />
                </div>
                <div className={styles.plus}>
                    <Image
                        src="/bento-v1-images/bento-10-plus.svg"
                        width={12}
                        height={12}
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div className={styles.cursors}>
            <div className={styles.cursor}>
                <Image
                    src="/bento-v1-images/bento-10-cursor.svg"
                    width={20}
                    height={20}
                    alt=""
                />
                <div className={styles.tooltip}>Artur</div>
            </div>
            <div className={styles.cursor}>
                <Image
                    src="/bento-v1-images/bento-10-cursor.svg"
                    width={20}
                    height={20}
                    alt=""
                />
                <div className={styles.tooltip}>Dash</div>
            </div>
        </div>
    </div>
);

export default Bento;
