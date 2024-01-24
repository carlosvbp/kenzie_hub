import logo from "../../assets/Logo.svg"
import { FormLogin } from "../../components/forms/FormLogin"
import styles from "./style.module.scss"

export const LoginPage = () => {
    return (
        <div className={styles.content}>
            <main>
                <div className={styles.div}>
                    <img src={logo} alt="logo" />
                </div>
                <FormLogin />
            </main>
        </div>
    )
}