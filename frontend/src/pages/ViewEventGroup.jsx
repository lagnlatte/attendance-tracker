import Navbar from "../components/navbar/Navbar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import styles from "../styles/ViewEventGroup.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

function ViewEventGroup() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [eventGroup, setEventGroup] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await api.get(`/event-groups/${id}`);
      setEventGroup(res.data);
    })();
  }, [id]);

  const handleDelete = async () => {
    await api.delete(`/event-groups/${id}`);
    navigate("/dashboard", { state: { message: "Event group deleted" } });
  };

  if (!eventGroup) return null;

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>View event group</h1>
        </div>

        <form className={styles.inputs}>
          <InputField
            label="Event Name"
            type="text"
            value={eventGroup.name}
            required={false}
            disabled={true}
          />
          <InputField
            label="Number of Sessions"
            type="number"
            value={eventGroup.sessionsCount}
            required={false}
            disabled={true}
          />

          <div className={styles.days}>
            <label className={`${styles.create} grey-text`}>Event Days</label>
            <div className={styles.checkboxes}>
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <label key={day} className={styles.choice}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    disabled={true}
                    checked={eventGroup.days?.includes(day)}
                    readOnly
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          <InputField
            label="Event Start Time"
            type="time"
            value={eventGroup.startTime}
            required={false}
            disabled={true}
          />
          <InputField
            label="Event End Time"
            type="time"
            value={eventGroup.endTime}
            required={false}
            disabled={true}
          />
        </form>

        <div className={styles.buttons}>
          <Button text="Delete event group" onClick={handleDelete} />
          <Button
            text="View attendance"
            onClick={() => navigate(`/attendance/${id}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewEventGroup;
