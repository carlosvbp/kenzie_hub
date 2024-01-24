import { useContext } from "react"
import { Input } from "../../forms/Input"
import { Option } from "../../forms/Option"
import { TechContext } from "../../../providers/TechContext"
import { useForm } from "react-hook-form"
import { editTechModalSchema } from "./editTechModal"
import styles from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"



export const EditTechModal = () => {
    const { setModalEditIsOpen, editingTech, editTech } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(editTechModalSchema),})

    const submit = (FormData) => {
        editTech(FormData)
    }

    return (
        <form className={styles.modalOverlay} role="dialog" onSubmit={handleSubmit(submit)}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => setModalEditIsOpen(false)}>X</button>
                </div>
                <div className={styles.content}>
                    <Input value={editingTech.title} label="Nome" type="text" placeholder="Digite aqui a tecnologia"
                        {...register("title")} error={errors.title} />
                    <div>
                        <label>Status</label>
                        <select defaultValue={editingTech.status} className={styles.select} {...register("status")} error={errors.status}>
                            <Option value="Iniciante" label="Iniciante" />
                            <Option value="Intermediário" label="Intermediário" />
                            <Option value="Avançado" label="Avançado" />
                        </select>
                    </div>
                    <button className={styles.enterButton}>Salvar alterações</button>
                </div>
            </div>
        </form>
    )
}