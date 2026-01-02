import styles from "../../styles/DashboardMediumCard.module.css"

function DashboardMediumCard( {sessions} ) {
    return (
        <div className={styles.mediumCard}>
            <h1>Upcoming</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.slice(0, 5).map((session) => (
                        <tr key={session.id}>
                            <td>{session.eventName}</td>
                            <td>{session.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardMediumCard