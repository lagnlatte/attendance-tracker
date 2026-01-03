import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import styles from "../styles/CreateEventGroup.module.css"

function CreateEventGroup() {
    return (
        <div className={styles.content}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Create event group</h1>
                    <p className="grey-text">Define your event details and schedule</p>
                </div>
                    <form className={styles.inputs}>
                        <InputField label="Event Name" type="text" placeholder="Web Tech Lecture"/>
                        <InputField label="Number of Sessions" type="number" placeholder="14"/>
                        <div className={styles.days}>
                            <label className={`${styles.create} grey-text`}>Event Days</label>
                            <div className={styles.checkboxes}>
                                {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
                                    <label key={day} className={styles.choice}>
                                        <input className={styles.checkbox} type="checkbox"></input>
                                        {day}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <InputField label="Event Start Time" type="time"/>
                        <InputField label="Event End Time" type="time"/>
                        <Button text="Create"></Button>
                    </form>
            </div>
        </div>
    )
}

export default CreateEventGroup