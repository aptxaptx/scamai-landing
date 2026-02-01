import styles from "./Bento49.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-49-main.svg"
                width={368}
                height={550}
                alt=""
            />
        </div>
        <div className={styles.boxes}>
            <div className={styles.box}></div>
            <div className={styles.box}>
                <span></span>
            </div>
            <div className={styles.box}></div>
        </div>
    </div>
);

export default Bento;
