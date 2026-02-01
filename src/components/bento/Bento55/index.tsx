import styles from "./Bento55.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <Image src="/bento-images/bento-55.svg" width={408} height={408} alt="" />
        <div className={styles.title}>AI</div>
    </div>
);

export default Bento;
