import logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"
import { FormRegister } from "../../components/forms/FormRegister"
import styles from "./style.module.scss"

export const RegisterPage = () => {
    return (
        <div className={styles.content}>
            <main>
                <div className={styles.header}>
                    <img src={logo} alt="logo" />
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                </div>
                <FormRegister />
            </main>
        </div>
    )
}