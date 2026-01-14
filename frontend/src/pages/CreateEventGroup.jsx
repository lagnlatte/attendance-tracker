import Navbar from "../components/navbar/NavBar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import styles from "../styles/CreateEventGroup.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function CreateEventGroup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [sessionsCount, setSessionsCount] = useState(1);
  const [days, setDays] = useState([]);
  const [startTime, setStartTime] = useState("13:30");
  const [endTime, setEndTime] = useState("14:50");
  const [err, setErr] = useState("");

  const toggleDay = (day) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleCreate = async () => {
    try {
      setErr("");
      await api.post("/event-groups", {
        name,
        sessionsCount,
        days,
        startTime,
        endTime,
      });
      navigate("/event-groups");
    } catch (e) {
      setErr(e?.response?.data?.error || "Create failed");
    }
  };

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Create event group</h1>
          <p className="grey-text">Define your event details and schedule</p>
        </div>

        <form
          className={styles.inputs}
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate();
          }}
        >
          <InputField
            label="Event Name"
            type="text"
            placeholder="Web Tech Lecture"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Number of Sessions"
            type="number"
            placeholder="14"
            value={sessionsCount}
            onChange={(e) => setSessionsCount(Number(e.target.value))}
          />

          <div className={styles.days}>
            <label className={`${styles.create} grey-text`}>Event Days</label>
            <div className={styles.checkboxes}>
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <label key={day} className={styles.choice}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={days.includes(day)}
                    onChange={() => toggleDay(day)}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          <InputField
            label="Event Start Time"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <InputField
            label="Event End Time"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          {err && <p className="grey-text">{err}</p>}
          <Button text="Create" />
        </form>
      </div>
    </div>
  );
}

export default CreateEventGroup;
