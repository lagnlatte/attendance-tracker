import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Button from "../components/Button"
import InputField from "../components/InputField"
import RoleTab from "../components/RoleTab"
import BackArrow from '../components/BackArrow'
import styles from "../styles/SignUp.module.css"

function SignUp() {
    const navigate = useNavigate();
    const { role, setRole } = useContext(UserContext);

    const handleLogin = () => {
        if (role === "participant") {
            navigate("/home");
        } else if (role === "host") {
            navigate("/dashboard");
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.signUp}>
                <div className={styles.headline}>
                    <div id="back">
                        <BackArrow onClick={() => navigate("/")}/>
                    </div>
                    <div className={styles.heading}>
                        <h1>Sign up</h1>
                        <p className="grey-text">Create an account to use Attenda</p>
                    </div>
                </div>
                <form className={styles.inputs} onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                 }}>
                    <InputField label="Full Name" type="text" placeholder="Jinx"/>
                    <InputField label="Email" type="email" placeholder="example@gmail.com"/>
                    <InputField label="Set Password" type="password" placeholder="******"/>
                    <div id="tabbing">
                        <p className="grey-text">Role</p>
                        <RoleTab selectedRole={role} onChangeRole={setRole}></RoleTab>
                    </div>
                    <Button text="Register"></Button>
                </form>
            </div>
            <div id="sign-in">
                <p className="grey-text">Already have an account?{" "}<Link to="/" className="info">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp