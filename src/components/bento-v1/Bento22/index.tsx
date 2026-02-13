import Image from "@/components/bento-v1/Image";
import styles from "./Bento22.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.globe}>
            <Image
                src="/bento-v1-images/bento-22-globe.svg"
                width={502}
                height={336}
                alt=""
            />
        </div>
        <div className={styles.tooltips}>
            <div className={styles.tooltip}>
                <div className={styles.dot}>
                    <span></span>
                </div>
                <div className={styles.title}>Studio 1</div>
            </div>
            <div className={styles.tooltip}>
                <div className={styles.dot}>
                    <span></span>
                </div>
                <div className={styles.title}>Headquarter</div>
            </div>
            <div className={styles.tooltip}>
                <div className={styles.dot}>
                    <span></span>
                </div>
                <div className={styles.title}>Studio 2</div>
            </div>
        </div>
    </div>
);

export default Bento;
