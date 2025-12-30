import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import "../styles/Home.css"

function Home() {
    const navigate = useNavigate();

    return (
        <div className="content content-home">
            <Navbar />
            <div id="attendance">
                    <div id="headline">
                        <h1>Confirm attendance</h1>
                        <p className="grey-text">Scan the QR code provided by host or enter the event code below</p>
                    </div>
                    <div id="inputs">
                        <InputField label="Event Code" type="text" placeholder="022884"/>
                        <Button text="Confirm" onClick={() => navigate("/confirm")}></Button>
                        <Button text="Scan QR code" onClick={() => navigate("/home")}></Button>
                    </div>
            </div>
        </div>
    )
}

export default Home