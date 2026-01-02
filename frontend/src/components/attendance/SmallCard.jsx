import styles from "../../styles/SmallCard.module.css"

function SmallCard({ Icon, title, text }) {
    return (
        <div className={styles.smallCard}>
            <Icon />
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}

export default SmallCard