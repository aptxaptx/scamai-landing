import styles from "./Bento40.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-images/bento-40-grid.svg"
                width={368}
                height={368}
                alt=""
            />
        </div>
        <div className={styles.monitor}>
            <div className={styles.screen}>
                <div className={styles.inner}>
                    <div className={styles.balls}>
                        <Image
                            src="/bento-images/bento-40-balls.svg"
                            width={55}
                            height={27}
                            alt=""
                        />
                    </div>
                    <div className={styles.boxes}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.cursor}>
                        <Image
                            src="/bento-images/bento-40-cursor.svg"
                            width={20}
                            height={20}
                            alt=""
                        />
                        <div className={styles.tooltip}>
                            <span>Bento</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.stand}>
                <div className={styles.foot}></div>
            </div>
        </div>
    </div>
);

export default Bento;
