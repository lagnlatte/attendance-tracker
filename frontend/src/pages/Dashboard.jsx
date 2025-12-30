import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import Button from "../components/Button"
import "../styles/Dashboard.css"
import SmallCard from '../components/dashboard/SmallCard';
import BooksIcon from "../assets/books.svg?react"
import CalendarIcon from "../assets/calendar.svg?react"
import CheckedIcon from "../assets/checked.svg?react"
import PeopleIcon from "../assets/people.svg?react"

function Dashboard() {
    const navigate = useNavigate();

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
                </div>  
            </div>
        </div>
    )
}

export default Dashboard