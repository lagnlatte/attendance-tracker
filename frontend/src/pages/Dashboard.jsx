import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import Button from "../components/Button"
import "../styles/Dashboard.css"
import SmallCard from '../components/dashboard/SmallCard';
import BooksIcon from "../assets/books.svg?react"
import CalendarIcon from "../assets/calendar.svg?react"
import CheckedIcon from "../assets/checked.svg?react"
import PeopleIcon from "../assets/people.svg?react"
import BigCard from '../components/dashboard/BigCard';
import MediumCard from '../components/dashboard/MediumCard';

function Dashboard() {
    const navigate = useNavigate();

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
        <div className="content content-home">
            <Navbar />
            <div id="dashboard">
                <div id="heading">
                    <h1>Welcome back, Alexandra!</h1>
                    <p className="grey-text">Here's what's happening today</p>
                </div>
                <div id="first-row">
                    <SmallCard
                        Icon={CheckedIcon}
                        title="Active Events"
                        heading="1 event"
                        text={ <>currently <span id="open">open</span></> }
                    />
                    <SmallCard
                        Icon={CalendarIcon}
                        title="Today's Sessions"
                        heading="2 sessions"
                        text="left"
                    />
                    <SmallCard
                        Icon={PeopleIcon}
                        title="Total Participants"
                        heading="169 check-ins"
                        text="today"
                    />
                    <SmallCard
                        Icon={BooksIcon}
                        title="Event Groups"
                        heading="7 groups"
                        text="ongoing"
                    />             
                </div>
                <div id="second-row">
                    <BigCard sessions={sessions}/>
                    <MediumCard sessions={upcomingSessions}/>
                </div>  
            </div>
        </div>
    )
}

export default Dashboard