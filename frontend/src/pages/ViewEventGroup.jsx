import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import "../styles/ViewEventGroup.css"

function ViewEventGroup() {
    return (
        <div className="view-event-group">
            <Navbar />
            <div id="event-content">
                <div id="headline">
                    <h1>View event group</h1>
                </div>
                    <div id="inputs">
                        <InputField label="Event Name" type="text" value="Web Tech Lecture" disabled={true}/>
                        <InputField label="Number of Sessions" type="text" value="14" disabled={true}/>
                        <InputField label="Event Day(s)" type="text" value="Thursday (recurring)" disabled={true}/>
                        <InputField label="Event Time" type="text" value="16:30 - 17:50" disabled={true}/>
                        <Button text="Delete event group"></Button>
                        <Button text="View attendance"></Button>
                    </div>
            </div>
        </div>
    )
}

export default ViewEventGroup