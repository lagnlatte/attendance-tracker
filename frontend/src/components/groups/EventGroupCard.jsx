import styles from "../../styles/EventGroupCard.module.css"
import ToDoIcon from "../../assets/todolist.svg?react"
import CalendarIcon from "../../assets/small-calendar.svg?react"
import PeopleIcon from "../../assets/small-people.svg?react"

function EventGroupCard({ name, sessionsCompleted, sessions, dateStarted, dateFinished, attendance }) {
    // calculate progress
    const progressPercent = sessionsCompleted / sessions * 100;

    // trim dateStarted and dateFinished to get date range
    function formatDate(dateStr) { // if "September 3, 2025"
        const parts = dateStr.split(" "); // then ["September", "3,", "2025"]
        const month = parts[0].slice(0, 3); // "Sep"
        const day = parts[1].replace(",", ""); // "3"
        return `${month} ${day}`;
    }

    return (
        <div className={styles.eventGroup}>
            <div className={styles.firstRow}>
                <ToDoIcon/>
                <p>{name}</p>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.progress}>
                    <div className={styles.progressSessions}>
                        <span className={styles.greyText}>Progress</span>
                        <span className={styles.blueText}>{sessionsCompleted}/{sessions} sessions</span>
                    </div>
                    <div className={styles.progressBar}>
                        <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }}></div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <div className={styles.title}>
                            <CalendarIcon/>
                            <p className={styles.greyText}>Date Range</p>
                        </div>
                        <p>{dateStarted && dateFinished ? `${formatDate(dateStarted)} - ${formatDate(dateFinished)}` : "No dates"}</p>
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.title}>
                            <PeopleIcon/>
                            <p className={styles.greyText}>Attendees</p>
                        </div>
                        <p>{attendance} total</p>
                    </div>
                </div>
            </div>
            <div className={styles.thirdRow}>
                    <p className={styles.blueText}>View Details →</p>
            </div>
        </div>
    )
}

export default EventGroupCard