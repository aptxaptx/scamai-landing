import Image from "@/components/bento-v1/Image";
import styles from "./Bento28.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento} style={{ filter: 'brightness(1.3) contrast(1.1)', position: 'relative', zIndex: 10 }}>
        <div className={styles.head}>
            <div className={styles.lines}></div>
            <div className={styles.block}>
                <div className={styles.line}></div>
                <div className={styles.circle}></div>
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.wrap}>
                <div className={styles.boxes}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={styles.balls}>
                    <Image
                        src="/bento-v1-images/bento-28-balls.svg"
                        width={108}
                        height={69}
                        alt=""
                    />
                </div>
                <div className={styles.tooltip}>
                    <div className={styles.title}>
                        $60<span>.00</span>
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.details}>
                        <div className={styles.square}></div>
                        <div className={styles.content}>Paid</div>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.item}>
                    <div className={styles.details}>
                        <div className={styles.square}></div>
                        <div className={styles.content}>Open</div>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.item}>
                    <div className={styles.details}>
                        <div className={styles.square}></div>
                        <div className={styles.content}>Past due</div>
                    </div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    </div>
);

export default Bento;
