import "../../styles/AttendanceBigCard.css"
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
        <div className="big-card-attendance">
            <div className="session-heading">
                <div className="session-name">
                    <p>{session.eventName + " - Session " + session.id}</p>
                </div>
                <div className="session-details attendance-details">
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
                    <tr className="table-header">
                        <th>Attendee</th>
                        <th>Email</th>
                        <th>Check-in time</th>
                    </tr>
                </thead>
                <tbody>
                    {session.attendees.map((participant) => (
                        <tr key={participant.id} className="attendee">
                            <td>
                                <div className="attendee-col">
                                    <div id="avatar">{participant.name.charAt(0)}</div>
                                    <p>{participant.name}</p>
                                </div>
                            </td>
                            <td>
                                <div className="attendee-col">
                                    <EmailIcon />
                                    <p className="grey-text">{participant.email}</p>
                                </div>
                            </td>
                            <td>
                                <div className="attendee-col">
                                    <ClockIcon />
                                    <p className="grey-text">{participant.checkIn}</p>
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