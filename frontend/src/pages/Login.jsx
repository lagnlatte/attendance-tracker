import { Link, useNavigate } from 'react-router-dom'
import Button from "../components/Button"
import InputField from "../components/InputField"
import RoleTab from "../components/RoleTab"
import "../styles/Login.css"
import Logo from "../components/Logo"

function Login() {
    const navigate = useNavigate();

    return (
        <div id="content">
            <div id="sign-in">
                <div id="headline">
                    <Logo />
                    <div id="heading">
                        <h1>Sign in to your account</h1>
                        <p className="grey-text">Enter your role, email and password to log in</p>
                    </div>
                </div>
                <div id="tabbing">
                    <RoleTab></RoleTab>
                </div>
                <div id="inputs">
                    <InputField label="Email" type="email" placeholder="example@gmail.com"/>
                    <InputField label="Password" type="password" placeholder="******"/>
                    <p className="info">Forgot Password?</p>
                    <Button text="Log in" onClick={() => navigate("/home")}></Button>
                </div>
            </div>
            <div id="sign-up">
                <p id="sign-up-text" className="grey-text">Don't have an account?<Link to="/signup" className="info">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login