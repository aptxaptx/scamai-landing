import styles from "./Bento4.module.sass";
import Image from "@/components/bento-v1/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.circles}>
            <Image
                src="/bento-v1-images/bento-4-circles.svg"
                width={336}
                height={336}
                alt=""
            />
        </div>
        <div className={styles.toggles}>
            <Image
                src="/bento-v1-images/bento-4-toggles.svg"
                width={336}
                height={336}
                alt=""
            />
        </div>
    </div>
);

export default Bento;
