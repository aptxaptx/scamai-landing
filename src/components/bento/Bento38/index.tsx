import styles from "./Bento38.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-38-main.svg"
                width={368}
                height={463}
                alt=""
            />
        </div>
        <div className={styles.title}>AI</div>
        <div className={styles.numbers}>
            <span>
                01000010 01100101 01101110 01110100 01101111 00100000 01000100
                01100101 01110011 01101001 01100111 01101110
            </span>
            <span>
                00100000 01010011 01111001 01110011 01110100 01100101 01101101
                00111010 00100000 01000011 01100001 01110010 01100100 01110011
            </span>
        </div>
    </div>
);

export default Bento;
