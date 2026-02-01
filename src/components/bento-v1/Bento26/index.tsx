import Image from "@/components/bento-v1/Image";
import styles from "./Bento26.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.top}>
            <div className={styles.details}>
                <div className={styles.title}>AA+</div>
                <div className={styles.info}>
                    <div className={styles.circle}></div>Site performance
                </div>
            </div>
            <div className={styles.box}> </div>
        </div>
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.block}>
                    <div className={styles.pin}>
                        <Image
                            src="/bento-v1-images/bento-26-pin.svg"
                            width={14}
                            height={16}
                            alt=""
                        />
                    </div>
                    <div className={styles.cursor}>
                        <Image
                            src="/bento-v1-images/bento-26-cursor.svg"
                            width={20}
                            height={20}
                            alt=""
                        />
                        <div className={styles.tooltip}>
                            <span>INP</span>
                        </div>
                    </div>
                    <div className={styles.time}>4 ms</div>
                </div>
                <div className={styles.circles}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.block}></div>
                <div className={styles.time}>0.8 s</div>
                <div className={styles.circles}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.block}></div>
                <div className={styles.time}>2.9 s</div>
                <div className={styles.circles}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.block}></div>
                <div className={styles.time}>2.9 s</div>
                <div className={styles.circles}>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
