import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import "../styles/Home.css"
import "../styles/Confirm.css"

function Confirm() {
    const navigate = useNavigate();

    return (
        <div id="content">
            <Navbar />
            <div id="confirm">
                    <div id="headline">
                        <h1>Did we get it right?</h1>
                    </div>
                    <div id="inputs">
                        <InputField label="Event Name" type="text" value="Web Tech Lecture" disabled={true}/>
                        <div id="buttons">
                            <Button text="Continue" onClick={() => navigate("/confirmed")}></Button>
                            <Button color="#FA0D11" text="Cancel" onClick={() => navigate("/home")}></Button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Confirm