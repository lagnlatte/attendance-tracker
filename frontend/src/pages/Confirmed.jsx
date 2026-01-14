import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/Button";
import styles from "../styles/Confirmed.module.css";
import api from "../api/api";

function Confirmed() {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId } = location.state || {};

  const [session, setSession] = useState(null);

  useEffect(() => {
    if (!eventId) return;

    api.get(`/sessions/${eventId}`).then((res) => {
      setSession(res.data);
    });
  }, [eventId]);

  if (!session) return null;

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Attendance confirmed</h1>
          <p className="grey-text">
            You've been marked as present to the event
          </p>
        </div>

        <div className={styles.event}>
          <p>
            <b>Event name: </b>
            <span>{session.eventName}</span>
          </p>
          <p>
            <b>Event date: </b>
            <span>{new Date(session.date).toLocaleDateString()}</span>
          </p>
          <p>
            <b>Event time: </b>
            <span>
              {session.startTime} – {session.endTime}
            </span>
          </p>
        </div>

        <Button text="Home" onClick={() => navigate("/home")} />
      </div>
    </div>
  );
}

export default Confirmed;
