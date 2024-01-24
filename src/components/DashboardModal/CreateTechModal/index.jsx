import { useContext } from "react"
import { Input } from "../../forms/Input"
import { Option } from "../../forms/Option"
import { TechContext } from "../../../providers/TechContext"
import { useForm } from "react-hook-form"
import { createTechModalSchema } from "./createTechModalSchema"
import styles from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"



export const CreateTechModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createTechModalSchema)
    })

    const { submit, setIsOpen } = useContext(TechContext)

    return (
        <form className={styles.modalOverlay} role="dialog" onSubmit={handleSubmit(submit)}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>
                <div className={styles.content}>
                    <Input label="Nome" type="text" placeholder="Digite aqui a tecnologia"
                        {...register("title")} error={errors.title} />
                    <div>
                        <label>Selecionar status</label>
                        <select className={styles.select}
                            {...register("status")} error={errors.status}>
                            <Option value="" label="Selecionar nível" />
                            <Option value="Iniciante" label="Iniciante" />
                            <Option value="Intermediário" label="Intermediário" />
                            <Option value="Avançado" label="Avançado" />
                        </select>
                    </div>
                    <button className={styles.enterButton}>Cadastrar Tecnologia</button>
                </div>
            </div>
        </form>
    )
}