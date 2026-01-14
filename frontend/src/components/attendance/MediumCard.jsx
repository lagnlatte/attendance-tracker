import "../../styles/AttendanceMediumCard.css";
import SmallCalendarIcon from "../../assets/small-calendar.svg?react";
import SmallPeopleIcon from "../../assets/small-people.svg?react";

function formatShortDate(d) {
  if (!d) return "-";
  const dt = new Date(d);
  if (Number.isNaN(dt.getTime())) return "-";
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatTimeRange(startTime, endTime) {
  if (!startTime || !endTime) return "-";
  return `${startTime} – ${endTime}`;
}

function MediumCard({
  sessions,
  selectedSessions,
  setSelectedSessions,
  activeSessionId,
  setActiveSessionId,
}) {
  const handleCheckboxChange = (id) => {
    setSelectedSessions((prev) =>
      prev.includes(id)
        ? prev.filter((sessionId) => sessionId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="attendance-medium-card">
      <div className="sessions-heading">
        <h1>All Sessions</h1>
        <p className="grey-text">Select a session to view attendees</p>
      </div>

      {sessions.map((session) => (
        <div
          key={session.id}
          className={`session ${
            activeSessionId === session.id ? "active" : ""
          }`}
          onClick={() => setActiveSessionId(session.id)}
        >
          <div className="session-name">
            <input
              type="checkbox"
              checked={selectedSessions.includes(session.id)}
              onClick={(e) => e.stopPropagation()}
              onChange={() => handleCheckboxChange(session.id)}
            />
            <label>{session.eventName || "Session"}</label>
          </div>

          <div className="session-details">
            <div className="session-date">
              <SmallCalendarIcon />
              <span>{formatShortDate(session.date)}</span>
            </div>

            <span>{formatTimeRange(session.startTime, session.endTime)}</span>

            <span className="open">
              {session.status === "OPEN" ? "OPEN" : ""}
            </span>
          </div>

          <div className="session-attendees">
            <SmallPeopleIcon />
            <span>{session.attendance ?? 0} attendees</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MediumCard;
