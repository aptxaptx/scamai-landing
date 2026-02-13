import styles from "./Bento37.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-images/bento-37-grid.svg"
                width={368}
                height={425}
                alt=""
            />
        </div>
        <div className={styles.squares}>
            <div className={styles.square}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.square}>
                <span></span>
            </div>
            <div className={styles.square}>
                <div className={styles.ball}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.square}>
                <span></span>
            </div>
            <div className={styles.square}>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
);

export default Bento;
