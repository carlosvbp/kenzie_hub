import { useContext } from "react"
import addButton from "../../assets/addButton.svg"
import styles from "./style.module.scss"
import { TechContext } from "../../providers/TechContext"
import { TechCard } from "./TechCard"

export const TechList = () => {
    const { techItens, setIsOpen } = useContext(TechContext)
    const openModal = (event) => {
        event.preventDefault()
        setIsOpen(true)
    }

    return (
        <div className={styles.container}>
            <div>
                <h1>Tecnologias</h1>
                <button onClick={openModal}>
                    <img
                        src={addButton}
                        alt="addButton" />
                </button>
            </div>
            {
                techItens.length > 0 ?
                    <ul>
                        {techItens.map(tech => (
                            <TechCard key={tech.id} tech={tech} />
                        ))}
                    </ul>
                    : null
            }
        </div>
    )
}