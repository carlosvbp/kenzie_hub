import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import styles from "./style.module.scss"
import { InputPassword } from "../InputPassword"
import { zodResolver } from "@hookform/resolvers/zod"
import { formLoginSchema } from "./formLoginSchema"
import { useContext, useState } from "react"
import { UserContext } from "../../../providers/Context"

	
export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLoginSchema)
    })

    const [loading, setLoading] = useState(false)

    const {userLogin} = useContext(UserContext)

    const submit = (formData) => {
        userLogin(formData, setLoading)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(submit)}>
            <div className={styles.title}>
                <h1>Login</h1>
            </div>
            <Input label="Email" type="email" placeholder="Digite aqui seu email" 
            {...register("email")} error={errors.email} disabled={loading} />
            <InputPassword label="Senha" placeholder="Digite aqui sua senha"
             {...register("password")} error={errors.password} disabled={loading}  />
            <div className={styles.buttons}>
                <button className={styles.enterButton}>
                    {loading ? "acessando" : "acessar"}
                </button>
                <p>Ainda não possui uma conta?</p>
                <Link className={styles.backButton} disabled={loading} to="/register">
                    <button >Cadastre-se</button>
                </Link>
            </div>
        </form>
    )
}