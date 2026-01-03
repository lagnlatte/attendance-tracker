import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import styles from "../styles/ViewEventGroup.module.css"
import { useNavigate } from "react-router-dom"

function ViewEventGroup() {
    const navigate = useNavigate();

    // create mock event group to view data
    const eventGroup = {
        id: 1,
        name: "Web Tech Lecture",
        sessions: 14,
        days: ["Mon", "Tue"],
        startTime: "13:30",
        endTime: "14:50"
    }

    const handleDelete = () => {
        // delete event group

        navigate("/dashboard", {
            state: { message: "Event group deleted" }
        })
    }

    return (
        <div className={styles.content}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>View event group</h1>
                </div>
                    <form className={styles.inputs}>
                        <InputField label="Event Name" type="text" value={eventGroup.name} required={false} disabled={true}/>
                        <InputField label="Number of Sessions" type="number" value={eventGroup.sessions} required={false} disabled={true}/>
                        <div className={styles.days}>
                            <label className={`${styles.create} grey-text`}>Event Days</label>
                            <div className={styles.checkboxes}>
                                {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
                                    <label key={day} className={styles.choice}>
                                        <input className={styles.checkbox} type="checkbox" disabled={true} checked={eventGroup.days.includes(day)}></input>
                                        {day}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <InputField label="Event Start Time" type="time" value={eventGroup.startTime} required={false} disabled={true}/>
                        <InputField label="Event End Time" type="time" value={eventGroup.endTime} required={false} disabled={true}/>
                    </form>
                    <div className={styles.buttons}>
                       <Button text="Delete event group" onClick={() => handleDelete()}></Button>
                        <Button text="View attendance" onClick={() => navigate("/attendance")}></Button> 
                    </div>
            </div>
        </div>
    )
}

export default ViewEventGroup