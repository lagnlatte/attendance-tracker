import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import "../styles/Home.css"

function Content() {
    return (
        <div id="content">
            <Navbar />
        </div>
    )
}

export default Content