import Navbar from "../components/navbar/NavBar"
import styles from "../styles/Dashboard.module.css"
import DashboardSmallCard from '../components/dashboard/DashboardSmallCard';
import BooksIcon from "../assets/books.svg?react"
import CalendarIcon from "../assets/calendar.svg?react"
import CheckedIcon from "../assets/checked.svg?react"
import PeopleIcon from "../assets/people.svg?react"
import DashboardBigCard from '../components/dashboard/DashboardBigCard';
import DashboardMediumCard from '../components/dashboard/DashboardMediumCard';
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Dashboard() {
    const location = useLocation();
    const [flashMessage, setFlashMessage] = useState("")

    // display a message after deleting an event group
    useEffect(() => {
        if (location.state?.message) {
            setFlashMessage(location.state.message);

            // message only lasts 3 seconds
            const timer = setTimeout(() => {
                setFlashMessage("");
            }, 3000)

            return () => clearTimeout(timer);
        }
    }, [location.state])

    // mock data for Live/Past Sessions
    const sessions = [
        {
            id: 1,
            eventName: "Web Tech Lecture",
            time: "16:30 – 17:50",
            status: "OPEN",
            attendance: "68"
        },
        {
            id: 2,
            eventName: "Web Tech Seminar - 1098",
            time: "15:00 – 16:20",
            status: "CLOSED",
            attendance: "21"
        },
        {
            id: 3,
            eventName: "Web Tech Seminar - 1097",
            time: "13:30 – 14:50",
            status: "CLOSED",
            attendance: "23"
        }
    ];

    // mock data for Upcoming Sessions
    const upcomingSessions = [
        {
            id: 4,
            eventName: "Web Tech Seminar - 1091",
            time: "18:00 – 19:20",
        },
        {
            id: 5,
            eventName: "Web Tech Seminar - 1092",
            time: "19:30 – 21:00",
        }
    ];


    return (
        <div className={styles.content}>
            <Navbar />
            {flashMessage && (
                <div className={styles.flashMessage}>{flashMessage}</div>
            )}
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Welcome back, Alexandra!</h1>
                    <p className="grey-text">Here's what's happening today</p>
                </div>
                <div className={styles.firstRow}>
                    <DashboardSmallCard
                        Icon={CheckedIcon}
                        title="Active Events"
                        heading="1 event"
                        text={ <>currently <span id="open">open</span></> }
                    />
                    <DashboardSmallCard
                        Icon={CalendarIcon}
                        title="Today's Sessions"
                        heading="2 sessions"
                        text="left"
                    />
                    <DashboardSmallCard
                        Icon={PeopleIcon}
                        title="Total Participants"
                        heading="169 check-ins"
                        text="today"
                    />
                    <DashboardSmallCard
                        Icon={BooksIcon}
                        title="Event Groups"
                        heading="7 groups"
                        text="ongoing"
                    />             
                </div>
                <div className={styles.secondRow}>
                    <DashboardBigCard sessions={sessions}/>
                    <DashboardMediumCard sessions={upcomingSessions}/>
                </div>  
            </div>
        </div>
    )
}

export default Dashboard