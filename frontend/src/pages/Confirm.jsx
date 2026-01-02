import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import styles from "../styles/Confirm.module.css"

function Confirm() {
    const navigate = useNavigate();

    return (
        <div className={styles.content}>
            <Navbar />
            <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>Did we get it right?</h1>
                    </div>
                    <div className={styles.inputs}>
                        <InputField label="Event Name" type="text" value="Web Tech Lecture" disabled={true}/>
                        <div className={styles.buttons}>
                            <Button text="Continue" onClick={() => navigate("/confirmed")}></Button>
                            <Button color="#FA0D11" text="Cancel" onClick={() => navigate("/home")}></Button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Confirm