import { useState } from "react";
import { default as NextImage } from "next/image";
import cn from "classnames";
import styles from "./Bento.module.sass";

type BentoProps = {
    title: string;
    content: string;
    image: string;
    titleButton: string;
};

const Bento = ({ title, content, image, titleButton }: BentoProps) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
        <div className={cn(styles.bento)}>
            <div className={styles.overlay}>
                <div className={styles.preview}>
                    <NextImage
                        className={`inline-block align-top opacity-0 transition-opacity ${
                            loaded && "opacity-100"
                        }`}
                        onLoad={() => setLoaded(true)}
                        src={image}
                        width={500}
                        height={500}
                        priority={true}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.inner}>
                <div className={styles.details}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.content}>{content}</div>
                    <button className={styles.button}>
                        <span className={styles.buttonTitle}>
                            {titleButton}
                        </span>
                        <span className={styles.buttonCircle}></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bento;
