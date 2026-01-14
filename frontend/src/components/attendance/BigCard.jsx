import styles from "../../styles/BigCard.module.css";
import SmallCalendarIcon from "../../assets/small-calendar.svg?react";
import EmailIcon from "../../assets/email.svg?react";
import ClockIcon from "../../assets/clock.svg?react";

function formatDate(d) {
  if (!d) return "-";
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return "-";
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTimeRange(startTime, endTime) {
  if (!startTime || !endTime) return "-";
  return `${startTime} – ${endTime}`;
}

function formatCheckIn(d) {
  if (!d) return "-";
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return "-";
  return dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function BigCard({ session }) {
  if (!session) {
    return (
      <div className={`${styles.bigCard} ${styles.empty}`}>
        <p className="grey-text">Select a session to view attendees</p>
      </div>
    );
  }

  const attendees = session.attendees || [];
  const title = session.eventName ? session.eventName : "Session";

  return (
    <div className={styles.bigCard}>
      <div className={styles.heading}>
        <div className={styles.sessionName}>
          <p>{title}</p>
        </div>

        <div className={styles.sessionDetails}>
          <div className={styles.sessionDate}>
            <SmallCalendarIcon />
            <span className="grey-text">{formatDate(session.date)}</span>
          </div>

          <div className={styles.sessionTime}>
            <ClockIcon />
            <span className="grey-text">
              {formatTimeRange(session.startTime, session.endTime)}
            </span>
          </div>

          <span
            className={`${styles.status} ${
              session.status === "OPEN" ? styles.open : styles.closed
            }`}
          >
            {session.status}
          </span>
        </div>
      </div>

      {attendees.length === 0 ? (
        <div className={`${styles.bigCard} ${styles.empty}`}>
          <p className="grey-text">No attendees for this session</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Attendee</th>
              <th>Email</th>
              <th className={styles.hide}>Check-in time</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((participant) => (
              <tr key={participant.id} className={styles.attendee}>
                <td>
                  <div className={styles.attendeeCol}>
                    <div id="avatar" className={styles.profileIcon}>
                      {participant.name?.charAt(0) || "?"}
                    </div>
                    <p>{participant.name || "-"}</p>
                  </div>
                </td>

                <td>
                  <div className={styles.attendeeCol}>
                    <EmailIcon className={styles.hide} />
                    <p className="grey-text">{participant.email || "-"}</p>
                  </div>
                </td>

                <td>
                  <div className={styles.attendeeCol}>
                    <ClockIcon className={styles.hide} />
                    <p className={`${styles.hide} grey-text email`}>
                      {formatCheckIn(participant.checkIn)}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BigCard;
