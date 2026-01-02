import { useNavigate } from "react-router-dom"
import styles from "../../styles/DashboardBigCard.module.css"

function DashboardBigCard({ sessions }) {
    const navigate = useNavigate();
    
    const handleShare = (sessionId) => navigate("/share");
    const handleView = (sessionId) => navigate("/view");

    return (
        <div className={styles.bigCard}>
            <h1>Live/Past Sessions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Time</th>
                        <th className={styles.hide}>Status</th>
                        <th className={styles.hide}>Attendance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.slice(0, 5).map((session) => (
                        <tr key={session.id}>
                            <td>{session.eventName}</td>
                            <td>{session.time}</td>
                            <td className={styles.hide}>
                                <span className={`${styles.status} ${session.status === "OPEN" ? `${styles.open}` : `${styles.closed}`}`}>
                                    {session.status}
                                </span>
                            </td>
                            <td className={styles.hide}>{session.attendance}</td>
                            <td>
                                <div className={styles.actions}>
                                    <button className={styles.viewBtn} onClick={() => handleView(session.id)}>View</button>
                                    {session.status === "OPEN" && (
                                        <button className={styles.shareBtn} onClick={() => handleShare(session.id)}>Share</button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardBigCard