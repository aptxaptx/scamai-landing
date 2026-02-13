import Image from "@/components/bento-v1/Image";
import styles from "./Bento13.module.sass";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.inner}>
            <div className={styles.image}>
                <Image
                    src="/bento-v1-images/bento-13.svg"
                    width={524}
                    height={336}
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Bento;
