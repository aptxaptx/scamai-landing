import Image from "@/components/bento-v1/Image";
import styles from "./Bento3.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.bento}>
            <div className={styles.grid}>
                <Image
                    src="/bento-v1-images/bento-3.svg"
                    width={336}
                    height={336}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
