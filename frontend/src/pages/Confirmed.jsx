import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import Button from "../components/Button"
import "../styles/Confirmed.css"

function Confirmed() {
    const navigate = useNavigate();

    return (
        <div className="content content-home">
            <Navbar />
            <div id="confirm">
                    <div id="headline">
                        <h1>Attendance confirmed</h1>
                        <p className="grey-text">You've been marked as present to the event</p>
                    </div>
                    <div id="inputs">
                        <div id="event">
                            <p><b>Event name: </b><span>Web Tech Lecture</span></p>
                            <p><b>Event date: </b><span>Thursday, 18 December</span></p>
                            <p><b>Event time: </b><span>16:30</span></p>
                        </div>
                        <Button text="Home" onClick={() => navigate("/home")}></Button>
                    </div>
            </div>
        </div>
    )
}

export default Confirmed