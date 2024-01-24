import { useContext } from "react"
import { MdEdit, MdDelete } from "react-icons/md"
import { TechContext } from "../../../providers/TechContext"
import styles from "./style.module.scss"

export const TechCard = ({ tech }) => {
    const { deleteTech, setEditingTech, setModalEditIsOpen } = useContext(TechContext)
    const openModal = (event) => {
        event.preventDefault()
        setModalEditIsOpen(true)
        setEditingTech(tech)
    }
    return (
        <li className={styles.card}>
            <div className={styles.cardContent}>
                <h2 className={styles.title} >{tech.title}</h2>
                <p>{tech.status}</p>
            </div>
            <div>
                <button onClick={openModal} title="Editar tech" aria-label="edit">
                    <MdEdit />
                </button>
                <button onClick={() => deleteTech(tech.id)} title="Remover tech" aria-label="remove">
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}