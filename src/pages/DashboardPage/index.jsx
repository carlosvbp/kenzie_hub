import { useContext } from "react"
import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/Context"
import { TechList } from "../../components/TechList"
import { CreateTechModal } from "../../components/DashboardModal/CreateTechModal"
import { TechContext } from "../../providers/TechContext"
import { EditTechModal } from "../../components/DashboardModal/EditTechModal"

export const DashboardPage = () => {
    const { user, userLogout } = useContext(UserContext)
    const { isOpen, modalEditIsOpen } = useContext(TechContext)

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="logo" />
                <button onClick={() => userLogout()}>Sair</button>
            </header>
            <div className={styles.userSpace}>
                <h1>Olá, {user?.name}</h1>
                <p> {user?.course_module}</p>
            </div>
            <main>
                <TechList />
                {
                    isOpen ? <CreateTechModal /> : null
                }
                {
                    modalEditIsOpen ? <EditTechModal /> : null
                }
            </main>
        </div>
    )
}