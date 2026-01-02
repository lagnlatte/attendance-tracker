import styles from "../../styles/DashboardSmallCard.module.css"

function DashboardSmallCard( {Icon, title, heading, text} ) {
    return (
        <div className={styles.smallCard}>
            <div className={styles.iconTitle}>
                <Icon />
                <p>{title}</p>
            </div>
            <p className={styles.heading}>{heading}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default DashboardSmallCard