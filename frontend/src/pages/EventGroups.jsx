import Navbar from "../components/navbar/NavBar"
import styles from "../styles/EventGroups.module.css"
import SmallCard from '../components/attendance/SmallCard';
import ToDoIcon from "../assets/todolist.svg?react"
import CalendarIcon from "../assets/calendar-3.svg?react"
import PeopleIcon from "../assets/people-2.svg?react"
import CheckedIcon from "../assets/checked-2.svg?react"
import SearchIcon from "../assets/search.svg?react"
import Button from "../components/Button";
import EventGroupCard from "../components/groups/EventGroupCard";

function EventGroups() {
    // mock data for event groups
    const eventGroups = [
        {
            id: 1,
            eventName: "Web Tech Lecture",
            sessions: 14,
            sessionsCompleted: 12,
            dateStarted: "September 3, 2025",
            dateFinished: "January 20, 2026",
            attendance: 250,
        },
        {
            id: 2,
            eventName: "Web Tech Seminar - 1096",
            sessions: 14,
            sessionsCompleted: 12,
            dateStarted: "September 3, 2025",
            dateFinished: "January 20, 2026",
            attendance: 150,
        },
        {
            id: 3,
            eventName: "Web Tech Seminar - 1097",
            sessions: 14,
            sessionsCompleted: 12,
            dateStarted: "September 3, 2025",
            dateFinished: "January 20, 2026",
            attendance: 110,
        },
        {
            id: 4,
            eventName: "Web Tech Seminar - 1098",
            sessions: 14,
            sessionsCompleted: 12,
            dateStarted: "September 3, 2025",
            dateFinished: "January 20, 2026",
            attendance: 90,
        }
    ];

    const totalSessions = eventGroups.reduce((sum, e) => sum + e.sessions, 0);
    const totalSessionsCompleted = eventGroups.reduce((sum, e) => sum + e.sessionsCompleted, 0);
    const totalAttendees = eventGroups.reduce((sum, e) => sum + e.attendance, 0);

    return (
        <div className="content content-home">
            <Navbar />
            <div id="attendance">
                <div id="heading">
                    <h1>Event Groups</h1>
                    <p className="grey-text">Manage and track attendance across all your event groups</p>
                </div>
                <div id="first-row">
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
                        <SearchIcon/>
                        <input type="text" placeholder="Search event groups..."></input>
                    </div>
                    <Button className={styles.createBtn} text={"Create event group"}/>
                </div>
                <div className={styles.thirdRow}>
                    {eventGroups.map((group) => (
                        <EventGroupCard 
                        name={group.eventName}
                        sessionsCompleted={group.sessionsCompleted}
                        sessions={group.sessions}
                        dateStarted={group.dateStarted}
                        dateFinished={group.dateFinished}
                        attendance={group.attendance}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventGroups