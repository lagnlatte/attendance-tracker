import styles from "../../styles/EventGroupCard.module.css";
import ToDoIcon from "../../assets/todolist.svg?react";
import CalendarIcon from "../../assets/small-calendar.svg?react";
import PeopleIcon from "../../assets/small-people.svg?react";
import { useNavigate } from "react-router-dom";

function EventGroupCard({
  id,
  name,
  sessionsCompleted,
  sessions,
  dateStarted,
  dateFinished,
  attendance,
}) {
  const navigate = useNavigate();

  // calculate progress
  const progressPercent =
    sessions && sessionsCompleted != null
      ? (sessionsCompleted / sessions) * 100
      : 0;

  function formatDate(d) {
    if (!d) return "-";
    const dateObj = new Date(d);
    if (Number.isNaN(dateObj.getTime())) return "-";
    return dateObj.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className={styles.eventGroup}>
      <div className={styles.firstRow}>
        <ToDoIcon />
        <p>{name}</p>
      </div>

      <div className={styles.secondRow}>
        <div className={styles.progress}>
          <div className={styles.progressSessions}>
            <span className={styles.greyText}>Progress</span>
            <span className={styles.blueText}>
              {sessionsCompleted}/{sessions} sessions
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <div className={styles.title}>
              <CalendarIcon />
              <p className={styles.greyText}>Date Range</p>
            </div>
            <p>
              {dateStarted && dateFinished
                ? `${formatDate(dateStarted)} - ${formatDate(dateFinished)}`
                : "No dates"}
            </p>
          </div>

          <div className={styles.detail}>
            <div className={styles.title}>
              <PeopleIcon />
              <p className={styles.greyText}>Attendees</p>
            </div>
            <p>{attendance ?? 0} total</p>
          </div>
        </div>
      </div>

      <div
        className={styles.thirdRow}
        onClick={() => navigate(`/event-groups/${id}`)}
      >
        <p className={styles.blueText}>View Details →</p>
      </div>
    </div>
  );
}

export default EventGroupCard;
