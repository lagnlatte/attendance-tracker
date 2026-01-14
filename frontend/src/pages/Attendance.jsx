import Navbar from "../components/navbar/Navbar";
import Button from "../components/Button";
import styles from "../styles/Attendance.module.css";
import SmallCard from "../components/attendance/SmallCard";
import ToDoIcon from "../assets/todolist.svg?react";
import CalendarIcon from "../assets/calendar-2.svg?react";
import CheckedIcon from "../assets/checked-2.svg?react";
import BigCard from "../components/attendance/BigCard";
import MediumCard from "../components/attendance/MediumCard";
import Export from "../components/attendance/Export";
import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

function Attendance() {
  const { eventGroupId } = useParams();
  const [sessions, setSessions] = useState([]);
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await api.get(`/attendance/event-group/${eventGroupId}`);
      setSessions(res.data);
      if (res.data.length > 0) setActiveSessionId(res.data[0].id);
    })();
  }, [eventGroupId]);

  const totals = useMemo(() => {
    const totalSessions = sessions.length;
    const now = Date.now();
    const completed = sessions.filter(
      (s) => new Date(s.date).getTime() < now
    ).length;
    return { totalSessions, completed };
  }, [sessions]);

  const handleExport = async (type) => {
    const sessionIds = selectedSessions;
    const url = type === "csv" ? "/export/csv" : "/export/xlsx";

    // added
    console.log("selectedSessions", selectedSessions);

    const res = await api.post(url, { sessionIds }, { responseType: "blob" });
    const blob = new Blob([res.data]);
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = type === "csv" ? "attendance.csv" : "attendance.xlsx";
    a.click();
  };

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Attendance</h1>
          <p className="grey-text">Track attendance across all sessions</p>
        </div>

        <div className={styles.firstRow}>
          <SmallCard
            Icon={CheckedIcon}
            title="Total Sessions"
            text={String(totals.totalSessions)}
          />
          <SmallCard
            Icon={ToDoIcon}
            title="Sessions Completed"
            text={String(totals.completed)}
          />
        </div>

        <div className={styles.secondRow}>
          {selectedSessions.length > 0 && (
            <Export
              selected={selectedSessions.length}
              onExportCSV={() => handleExport("csv")}
              onExportXLSX={() => handleExport("xlsx")}
            />
          )}
        </div>

        <div className={styles.thirdRow}>
          <MediumCard
            sessions={sessions}
            selectedSessions={selectedSessions}
            setSelectedSessions={setSelectedSessions}
            activeSessionId={activeSessionId}
            setActiveSessionId={setActiveSessionId}
          />

          {activeSessionId && (
            <BigCard session={sessions.find((s) => s.id === activeSessionId)} />
          )}
          {activeSessionId && (
            <Button
              text="Share session"
              onClick={() => navigate(`/share/${activeSessionId}`)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
