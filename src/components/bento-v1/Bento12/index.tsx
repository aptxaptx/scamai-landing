import styles from "./Bento12.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.inner}>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.box}></div>
                    <div className={styles.lines}></div>
                </div>
                <div className={styles.item}>
                    <div className={styles.box}></div>
                    <div className={styles.lines}></div>
                </div>
            </div>
        </div>
        <div className={styles.square}></div>
        <div className={styles.item}>
            <div className={styles.box}></div>
            <div className={styles.lines}></div>
        </div>
    </div>
);

export default Bento;
