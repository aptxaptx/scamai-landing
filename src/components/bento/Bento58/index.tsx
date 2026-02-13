import styles from "./Bento58.module.sass";
import Image from "@/components/bento/Image";

type BentoProps = {};

const Bento = ({}: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.main}>
            <Image
                src="/bento-images/bento-58-main.svg"
                width={368}
                height={448}
                alt=""
            />
        </div>
        <div className={styles.monitor}>
            <div className={styles.screen}>
                <div className={styles.inner}></div>
                <Image
                    src="/bento-images/bento-58-video-editor.svg"
                    width={178}
                    height={138}
                    alt=""
                />
                <div className={styles.play}>
                    <Image
                        src="/bento-images/bento-58-play.svg"
                        width={80}
                        height={86}
                        alt=""
                    />
                </div>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <div className={styles.progress}></div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.progress}></div>
                    </div>
                </div>
            </div>
            <div className={styles.stand}>
                <div className={styles.foot}></div>
            </div>
        </div>
    </div>
);

export default Bento;
