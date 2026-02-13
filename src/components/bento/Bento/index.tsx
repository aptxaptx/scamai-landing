import cn from "classnames";
import styles from "./Bento.module.sass";

type BentoProps = {
    title: string;
    content: string;
    borderPreview?: boolean;
    children: React.ReactNode;
};

const Bento = ({ title, content, borderPreview, children }: BentoProps) => (
    <div className={styles.bento}>
        <div className={styles.overlay}></div>
        <div className={styles.inner}>
            <div
                className={cn(styles.preview, {
                    [styles.previewBorder]: borderPreview,
                })}
            >
                {children}
            </div>
            <div className={styles.details}>
                <div className={styles.title}>{title}</div>
                <div className={styles.content}>{content}</div>
                <button className={styles.button}>
                    <span className={styles.buttonTitle}>Discover</span>
                    <span className={styles.buttonCircle}></span>
                </button>
            </div>
        </div>
    </div>
);

export default Bento;
