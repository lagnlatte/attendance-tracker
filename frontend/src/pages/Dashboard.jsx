import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Dashboard.module.css";
import DashboardSmallCard from "../components/dashboard/DashboardSmallCard";
import BooksIcon from "../assets/books.svg?react";
import CalendarIcon from "../assets/calendar.svg?react";
import CheckedIcon from "../assets/checked.svg?react";
import PeopleIcon from "../assets/people.svg?react";
import DashboardBigCard from "../components/dashboard/DashboardBigCard";
import DashboardMediumCard from "../components/dashboard/DashboardMediumCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import api from "../api/api";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState("");

  const [groups, setGroups] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [upcomingSessions, setUpcomingSessions] = useState([]);

  useEffect(() => {
    if (location.state?.message) {
      setFlashMessage(location.state.message);
      const timer = setTimeout(() => setFlashMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/event-groups");
      setGroups(res.data);

      // load sessions for first group
      if (res.data.length > 0) {
        const groupId = res.data[0].id;
        const ses = await api.get(`/attendance/event-group/${groupId}`);
        const now = Date.now();
        const livePast = ses.data
          .map((s) => ({
            id: s.id,
            eventName: res.data[0].name,
            time: `${s.startTime} – ${s.endTime}`,
            status: s.status,
            attendance: String(s.attendance),
            date: s.date,
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        const upcoming = livePast
          .filter((s) => new Date(s.date).getTime() > now)
          .slice(0, 5);

        setSessions(
          livePast.map((s) => ({
            ...s,
            eventGroupId: groupId,
          }))
        );

        setUpcomingSessions(
          upcoming.map((s) => ({
            id: s.id,
            eventName: s.eventName,
            time: s.time,
          }))
        );
      }
    })();
  }, []);

  const totals = useMemo(() => {
    const eventGroupsCount = groups.length;
    const totalSessions = groups.reduce(
      (sum, g) => sum + (g.sessionsCount || 0),
      0
    );

    const totalAttendees = groups.reduce(
      (sum, g) => sum + (g.attendanceTotal || 0),
      0
    );

    return { eventGroupsCount, totalSessions, totalAttendees };
  }, [groups]);

  return (
    <div className={styles.content}>
      <Navbar />
      {flashMessage && (
        <div className={styles.flashMessage}>{flashMessage}</div>
      )}

      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Welcome back!</h1>
          <p className="grey-text">Here's what's happening</p>
        </div>

        <div className={styles.firstRow}>
          <div className={`${styles.hide} ${styles.buttons}`}>
            <Button
              text="Create new event group"
              onClick={() => navigate("/create")}
            />
            <Button
              text="Event groups"
              onClick={() => navigate("/event-groups")}
            />
          </div>

          <DashboardSmallCard
            Icon={CalendarIcon}
            title="Total Sessions"
            heading={`${totals.totalSessions}`}
            text="planned"
          />
          <DashboardSmallCard
            Icon={PeopleIcon}
            title="Participants"
            heading={`${totals.totalAttendees} check-ins`}
            text="overall"
          />
          <DashboardSmallCard
            Icon={BooksIcon}
            title="Event Groups"
            heading={`${totals.eventGroupsCount} groups`}
            text="ongoing"
          />
        </div>

        <div className={styles.secondRow}>
          <DashboardBigCard sessions={sessions} />
          <DashboardMediumCard sessions={upcomingSessions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
