import { Link, useNavigate } from 'react-router-dom'
import Button from "../components/Button"
import InputField from "../components/InputField"
import RoleTab from "../components/RoleTab"
import "../styles/Login.css"
import BackArrow from '../components/BackArrow'

function SignUp() {
    const navigate = useNavigate();

    return (
        <div id="content">
            <div id="sign-in">
                <div id="headline">
                    <div id="back">
                        <BackArrow onClick={() => navigate("/")}/>
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
                    <Button text="Register" onClick={() => navigate("/home")}></Button>
                </div>
            </div>
            <div id="sign-up">
                <p id="sign-up-text" className="grey-text">Already have an account?<Link to="/" className="info">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp