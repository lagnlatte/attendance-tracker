import "../../styles/MediumCard.css"

function MediumCard( {sessions} ) {
    return (
        <div className="medium-card">
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

export default MediumCard