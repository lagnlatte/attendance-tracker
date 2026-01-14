import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/NavBar";
import styles from "../styles/EventGroups.module.css";
import SmallCard from "../components/attendance/SmallCard";
import ToDoIcon from "../assets/todolist.svg?react";
import CalendarIcon from "../assets/calendar-3.svg?react";
import PeopleIcon from "../assets/people-2.svg?react";
import CheckedIcon from "../assets/checked-2.svg?react";
import SearchIcon from "../assets/search.svg?react";
import Button from "../components/Button";
import EventGroupCard from "../components/groups/EventGroupCard";
import api from "../api/api";

function EventGroups() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [eventGroups, setEventGroups] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/event-groups");
      setEventGroups(res.data);
    })();
  }, []);

  const filteredGroups = search
    ? eventGroups.filter((g) =>
        g.name.toLowerCase().includes(search.toLowerCase())
      )
    : eventGroups;

  const totalSessions = eventGroups.reduce(
    (sum, e) => sum + (e.sessionsCount || 0),
    0
  );
  const totalSessionsCompleted = eventGroups.reduce(
    (sum, e) => sum + (e.sessionsCompleted || 0),
    0
  );

  const totalAttendees = eventGroups.reduce(
    (sum, g) => sum + (g.attendanceTotal || 0),
    0
  );

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Event Groups</h1>
          <p className="grey-text">
            Manage and track attendance across all your event groups
          </p>
        </div>

        <div className={styles.firstRow}>
          <SmallCard
            Icon={ToDoIcon}
            title="Total Event Groups"
            text={eventGroups.length}
          />
          <SmallCard
            Icon={CalendarIcon}
            title="Total Sessions"
            text={totalSessions}
          />
          <SmallCard
            Icon={PeopleIcon}
            title="Total Attendees"
            text={totalAttendees}
          />
          <SmallCard
            Icon={CheckedIcon}
            title="Sessions Completed"
            text={totalSessionsCompleted}
          />
        </div>

        <div className={styles.secondRow}>
          <div className={styles.searchBar}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search event groups..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            className={styles.createBtn}
            text={"Create event group"}
            onClick={() => navigate("/create")}
          />
        </div>

        <div className={styles.thirdRow}>
          {filteredGroups.map((group) => (
            <EventGroupCard
              key={group.id}
              id={group.id}
              name={group.name}
              sessionsCompleted={group.sessionsCompleted}
              sessions={group.sessionsCount}
              dateStarted={group.dateStarted}
              dateFinished={group.dateFinished}
              attendance={group.attendance || 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventGroups;
