import "../../styles/BigCard.css"

function BigCard( {sessions} ) {
    return (
        <div className="big-card">
            <h1>Live/Past Sessions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Attendance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.slice(0, 5).map((session) => (
                        <tr key={session.id}>
                            <td>{session.eventName}</td>
                            <td>{session.time}</td>
                            <td>
                                <span className={`status ${session.status === "OPEN" ? "open" : "closed"}`}>
                                    {session.status}
                                </span>
                            </td>
                            <td>{session.attendance}</td>
                            <td>
                                <div className="actions">
                                    <button className="view-btn">View</button>
                                    {session.status === "OPEN" && (
                                        <button className="share-btn">Share</button>
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

export default BigCard