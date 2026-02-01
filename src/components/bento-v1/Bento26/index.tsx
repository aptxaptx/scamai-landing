import Image from "@/components/bento-v1/Image";
import styles from "./Bento26.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento} style={{ filter: 'brightness(1.3) contrast(1.1)', position: 'relative', zIndex: 10 }}>
        <div className={styles.top}>
            <div className={styles.details}>
                <div className={styles.title}>AI Detection</div>
                <div className={styles.info}>
                    <div className={styles.circle} style={{ background: '#ef4444' }}></div>Real-time analysis
                </div>
            </div>
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
                    <div className={styles.tooltip}>
                        <span>FAKE</span>
                    </div>
                    <div className={styles.time}>98%</div>
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
                <div className={styles.time}>95%</div>
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
                <div className={styles.time}>92%</div>
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
                <div className={styles.time}>89%</div>
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
