import Image from "@/components/bento-v1/Image";
import styles from "./Bento9.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.cells}>
            <div className={styles.inner}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.mask}>
                            <div className={styles.group}>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.center}>
                            <div className={styles.icon}>
                                <Image
                                    src="/bento-v1-images/bento-9-line.svg"
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ul className={styles.bar}>
            <li>
                <Image
                    src="/bento-v1-images/bento-9-home.svg"
                    width={16}
                    height={16}
                    alt=""
                />
            </li>
            <li>
                <Image
                    src="/bento-v1-images/bento-9-align-left.svg"
                    width={16}
                    height={16}
                    alt=""
                />
            </li>
            <li>
                <Image
                    src="/bento-v1-images/bento-9-plus.svg"
                    width={8}
                    height={8}
                    alt=""
                />
                <Image
                    src="/bento-v1-images/bento-9-cursor.svg"
                    width={20}
                    height={20}
                    alt=""
                />
            </li>
            <li>
                <Image
                    src="/bento-v1-images/bento-9-chat.svg"
                    width={16}
                    height={16}
                    alt=""
                />
            </li>
            <li>
                <Image
                    src="/bento-v1-images/bento-9-space.svg"
                    width={16}
                    height={16}
                    alt=""
                />
            </li>
        </ul>
    </div>
);

export default Bento;
