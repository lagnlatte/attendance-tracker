import { useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar/NavBar"
import InputField from "../components/InputField"
import Button from "../components/Button"
import styles from "../styles/Home.module.css"
import QRText from '../components/QRText'

function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.content}>
            <Navbar />
            <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>Confirm attendance</h1>
                        <QRText />
                    </div>
                    <div className={styles.inputs}>
                        <form className={styles.inputs} onSubmit={(e) => {
                            e.preventDefault();
                            navigate("/confirm");
                        }}>
                            <InputField label="Event Code" type="text" placeholder="022884"/>
                            <Button text="Confirm"></Button>
                        </form>
                        <Button showOnMobile={true} text="Scan QR code" onClick={() => navigate("/home")}></Button>
                    </div>
            </div>
        </div>
    )
}

export default Home