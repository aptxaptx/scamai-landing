import styles from "./Bento36.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.grid}>
            <Image
                src="/bento-images/bento-36-grid.svg"
                width={756}
                height={1228}
                alt=""
            />
        </div>
        <div className={styles.polygons}>
            <div className={styles.top}>
                <div className={styles.polygon}>
                    <Image
                        src="/bento-images/bento-36-polygon-top-1.svg"
                        width={470}
                        height={415}
                        alt=""
                    />
                </div>
                <div className={styles.polygon}>
                    <Image
                        src="/bento-images/bento-36-polygon-top-2.svg"
                        width={276}
                        height={247}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.polygon}>
                    <Image
                        src="/bento-images/bento-36-polygon-bottom-1.svg"
                        width={523}
                        height={461}
                        alt=""
                    />
                </div>
                <div className={styles.polygon}>
                    <Image
                        src="/bento-images/bento-36-polygon-bottom-2.svg"
                        width={468}
                        height={413}
                        alt=""
                    />
                </div>
                <div className={styles.polygon}>
                    <Image
                        src="/bento-images/bento-36-polygon-bottom-3.svg"
                        width={283}
                        height={253}
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div className={styles.square}>
            <div className={styles.toggle}>
                <Image
                    src="/bento-images/bento-36-toggle.svg"
                    width={66}
                    height={66}
                    alt=""
                />
            </div>
            <div className={styles.dots}>
                <Image
                    src="/bento-images/bento-36-dots.svg"
                    width={166}
                    height={108}
                    alt=""
                />
            </div>
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
