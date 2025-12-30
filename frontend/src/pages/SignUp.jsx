import { Link } from 'react-router-dom'
import Button from "../components/Button"
import InputField from "../components/InputField"
import RoleTab from "../components/RoleTab"
import "../styles/Login.css"

function SignUp() {
    return (
        <div id="content">
            <div id="sign-in">
                <div id="headline">
                    <div id="back">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M5 12L9 16M5 12L9 8" stroke="#1A1C1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div id="heading">
                        <h1>Sign up</h1>
                        <p className="grey-text">Create an account to use Attenda</p>
                    </div>
                </div>
                <div id="inputs">
                    <InputField label="Full Name" type="text" placeholder="Jinx"/>
                    <InputField label="Email" type="email" placeholder="example@gmail.com"/>
                    <InputField label="Set Password" type="password" placeholder="******"/>
                    <div id="tabbing">
                        <p className="grey-text">Role</p>
                        <RoleTab></RoleTab>
                    </div>
                    <Button text="Register"></Button>
                </div>
            </div>
            <div id="sign-up">
                <p id="sign-up-text" className="grey-text">Already have an account?<Link to="/" className="info">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp