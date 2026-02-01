import styles from "./Bento52.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-images/bento-52-grid.svg"
                width={524}
                height={431}
                alt=""
            />
        </div>
        <div className={styles.list}>
            <div className={styles.item}>
                <div className={styles.inner}>
                    <div className={styles.boxes}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.inner}></div>
            </div>
            <div className={styles.item}>
                <div className={styles.inner}>
                    <div className={styles.boxes}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.inner}>
                    <div className={styles.boxes}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.inner}>
                    <div className={styles.boxes}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.numbers}>
            <span>
                01000010 01100101 01101110 01110100 01101111 00100000 01000100
                01100101 01110011 01101001 01100111 01101110 <br></br>
                <br></br>00100000 01010011 01111001 01110011 01110100 01100101
                01101101 00111010 00100000 01000011 01100001 01110010 01100100
                01110011
            </span>
        </div>
    </div>
);

export default Bento;
