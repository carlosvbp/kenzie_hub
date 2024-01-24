import { Input } from "../Input"
import { Option } from "../Option"
import { useForm } from "react-hook-form"
import styles from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormSchema"
import { InputPassword } from "../InputPassword"
import { useContext, useState } from "react"
import { UserContext } from "../../../providers/Context"
import { isDirty, isValid } from "zod"

export const FormRegister = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const [loading, setLoading] = useState(false)
    const { userRegister } = useContext(UserContext)

    const submit = (formData) => {
        userRegister(formData, setLoading)
        reset()
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(submit)}>
            <div className={styles.title}>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa!</p>
            </div>
            <Input label="Nome" type="text" placeholder="Digite aqui seu nome"
                {...register("name")} error={errors.name} disabled={loading} />
            <Input label="Email" type="email" placeholder="Digite aqui seu email"
                {...register("email")} error={errors.email} disabled={loading} />
            <InputPassword label="Senha" placeholder="Digite aqui sua senha"
                {...register("password")} error={errors.password} disabled={loading}/>
            <InputPassword label="Confirmar senha" placeholder="Digite novamente sua senha"
                {...register("confirmPassword")} error={errors.confirmPassword}disabled={loading} />
            <Input label="Bio" type="text" placeholder="Fale sobre você"
                {...register("bio")} error={errors.bio} disabled={loading}/>
            <Input label="Contato" type="text" placeholder="Opção de contato"
                {...register("contact")} error={errors.contact} disabled={loading}/>
            <label>Selecionar módulo</label>
            <select className={styles.select}
                {...register("course_module")} error={errors.course_module}>
                <Option value="" label="Selecionar módulo" />
                <Option value="Primeiro módulo (Introdução ao Frontend)" label="Primeiro módulo (Introdução ao Frontend)" />
                <Option value="Segundo módulo (Frontend Avançado)" label="Segundo módulo (Frontend Avançado)" />
                <Option value="Terceiro módulo (Introdução ao Backend)" label="Terceiro módulo (Introdução ao Backend)" />
                <Option value="Quarto módulo (Backend Avançado)" label="Quarto módulo (Backend Avançado)" />
            </select>
            <p>{errors.course_module?.message }</p>
            <button className={styles.enterButton} disabled={!isValid || !isDirty}
            >{loading ? "Cadastrando..." : "Cadastrar"}</button>
        </form>
    )
}