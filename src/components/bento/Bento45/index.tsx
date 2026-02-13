import styles from "./Bento45.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.image}>
            <Image src="/bento-images/bento-45.svg" width={368} height={475} alt="" />
        </div>
        <div className={styles.ball}>
            <span></span>
        </div>
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.boxes}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.circle}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.item}>
                <Image
                    src="/bento-images/bento-45-camera.svg"
                    width={24}
                    height={21}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
