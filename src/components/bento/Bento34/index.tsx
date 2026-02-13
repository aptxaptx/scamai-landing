import styles from "./Bento34.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <Image src="/bento-images/bento-34.svg" width={336} height={354} alt="" />
        <div className={styles.number}>50%</div>
    </div>
);

export default Bento;
