import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import "../styles/ViewEventGroup.css"

function CreateEventGroup() {
    return (
        <div className="view-event-group">
            <Navbar />
            <div id="event-content">
                <div id="headline">
                    <h1>Create event group</h1>
                    <p className="grey-text">Define your event details and schedule</p>
                </div>
                    <div id="inputs">
                        <InputField label="Event Name" type="text" placeholder="Web Tech Lecture"/>
                        <InputField label="Number of Sessions" type="text" placeholder="14"/>
                        <InputField label="Event Day(s)" type="text" placeholder="[Select day(s)]"/>
                        <InputField label="Event Time" type="text" placeholder="[HH:MM - HH:MM]"/>
                        <Button text="Create"></Button>
                    </div>
            </div>
        </div>
    )
}

export default CreateEventGroup