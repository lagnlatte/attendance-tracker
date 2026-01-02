import "../../styles/AttendanceMediumCard.css"
import SmallCalendarIcon from "../../assets/small-calendar.svg?react"
import EmailIcon from "../../assets/email.svg?react"
import ClockIcon from "../../assets/clock.svg?react"

function BigCard({ session }) {
    if (!session || !session.attendees) {
        return (
            <div className="big-card empty">
                <p className="grey-text">No attendees for this session</p>
            </div>
        );
    }
    
    return (
        <div className="big-card">
            <div className="sessions-heading">
                <div className="session-name">
                    <p>{session.eventName + " - Session " + session.id}</p>
                </div>
                <div className="session-details">
                    <div className="session-date">
                        <SmallCalendarIcon />
                        <span>{session.date}</span>
                    </div>
                    <div className="session-time">
                        <ClockIcon />
                        <span>{session.time}</span>
                    </div>
                    <span className="open">{session.status === "OPEN" ? "OPEN" : ""}</span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Attendee</th>
                        <th>Email</th>
                        <th>Check-in time</th>
                    </tr>
                </thead>
                <tbody>
                    {session.attendees.map((participant) => (
                        <tr key={participant.id}>
                            <td>
                                <div className="name-col">
                                    <div id="avatar">{participant.name.charAt(0)}</div>
                                    {participant.name}
                                </div>
                            </td>
                            <td>
                                <div className="email-col">
                                    <EmailIcon />
                                    {participant.email}
                                </div>
                            </td>
                            <td>
                                <div className="time-col">
                                    <ClockIcon />
                                    {participant.checkIn}
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