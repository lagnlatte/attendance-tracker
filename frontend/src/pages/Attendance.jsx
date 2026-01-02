import Navbar from "../components/navbar/NavBar"
import "../styles/Dashboard.css"
import SmallCard from '../components/attendance/SmallCard';
import ToDoIcon from "../assets/todolist.svg?react"
import CalendarIcon from "../assets/calendar-2.svg?react"
import CheckedIcon from "../assets/checked-2.svg?react"
import BigCard from '../components/attendance/BigCard';
import MediumCard from '../components/attendance/MediumCard';
import Export from "../components/attendance/Export";
import { useState } from "react";

function Attendance() {
    // for export
    const [selectedSessions, setSelectedSessions] = useState([]);
    // for viewing attendees
    const [activeSessionId, setActiveSessionId] = useState(null);


    // mock data for sessions
    const sessions = [
        {
            id: 12,
            eventName: "Web Tech Lecture",
            date: "December 18, 2025",
            time: "15:00 – 16:20",
            status: "OPEN",
            attendance: "31",
            attendees: [
            {
                id: 1,
                name: "Alex Johnson",
                email: "alex.johnson@gmail.com",
                checkIn: "15:01"
            },
            {
                id: 2,
                name: "Maria Popescu",
                email: "maria.popescu@gmail.com",
                checkIn: "15:02"
            },
            {
                id: 3,
                name: "David Kim",
                email: "david.kim@gmail.com",
                checkIn: "15:03"
            }
            ]
        },
        {
            id: 11,
            eventName: "Web Tech Lecture",
            date: "December 11, 2025",
            time: "15:00 – 16:20",
            status: "CLOSED",
            attendance: "52"
        },
        {
            id: 10,
            eventName: "Web Tech Lecture",
            date: "December 4, 2025",
            time: "15:00 – 16:20",
            status: "CLOSED",
            attendance: "56"
        },
        {
            id: 9,
            eventName: "Web Tech Lecture",
            date: "November 27, 2025",
            time: "15:00 – 16:20",
            status: "CLOSED",
            attendance: "68"
        },
        {
            id: 8,
            eventName: "Web Tech Lecture",
            date: "November 20, 2025",
            time: "15:00 – 16:20",
            status: "CLOSED",
            attendance: "40"
        },
        {
            id: 7,
            eventName: "Web Tech Lecture",
            date: "November 13, 2025",
            time: "15:00 – 16:20",
            status: "CLOSED",
            attendance: "80"
        },
        {
            id: 6,
            eventName: "Web Tech Lecture",
            date: "November 6, 2025",
            time: "15:00 – 16:20",
            status: "CLOSED",
            attendance: "59"
        }
    ];

    return (
        <div className="content content-home">
            <Navbar />
            <div id="dashboard">
                <div id="heading">
                    <h1>Attendance</h1>
                    <p className="grey-text">Track attendance across all sessions for <span>Web Tech Lecture</span></p>
                </div>
                <div id="first-row">
                    <SmallCard
                        Icon={CheckedIcon}
                        title="Total Sessions"
                        text="14"
                    />
                    <SmallCard
                        Icon={ToDoIcon}
                        title="Sessions Completed"
                        text="7"
                    />  
                    <SmallCard
                        Icon={CalendarIcon}
                        title="Date Range"
                        text="Oct 3 - Jan 14"
                    />           
                </div>
                <div id="second-row">
                    {selectedSessions.length > 0 && <Export selected={selectedSessions.length}></Export>}
                </div>
                <div id="third-row">
                    <MediumCard 
                        sessions={sessions}
                        selectedSessions={selectedSessions}
                        setSelectedSessions={setSelectedSessions}
                        activeSessionId={activeSessionId}
                        setActiveSessionId={setActiveSessionId}
                    />

                    {activeSessionId && (
                        <BigCard session={sessions.find(s => s.id === activeSessionId)}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Attendance