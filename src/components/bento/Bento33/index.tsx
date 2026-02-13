import styles from "./Bento33.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <Image src="/bento-images/bento-33.svg" width={336} height={356} alt="" />
    </div>
);

export default Bento;
