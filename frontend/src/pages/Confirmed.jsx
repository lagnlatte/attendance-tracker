import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import Button from "../components/Button"
import styles from "../styles/Confirmed.module.css"

function Confirmed() {
    const navigate = useNavigate();

    return (
        <div className={styles.content}>
            <Navbar />
            <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>Attendance confirmed</h1>
                        <p className="grey-text">You've been marked as present to the event</p>
                    </div>
                    <div className={styles.event}>
                        <p><b>Event name: </b><span>Web Tech Lecture</span></p>
                        <p><b>Event date: </b><span>Thursday, 18 December</span></p>
                        <p><b>Event time: </b><span>16:30</span></p>
                    </div>
                    <Button text="Home" onClick={() => navigate("/home")}></Button>
            </div>
        </div>
    )
}

export default Confirmed