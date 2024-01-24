import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")

        const getUser = async () => {
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
            }
        }
        if (token) {
            getUser()
        }
    }, [])

    const userLogout = () => {
        toast.warning("Deslogando...")
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }

    const userLogin = async (formData, setLoading) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            setUser(data.user)
            toast.success("Logado com sucesso.")
            localStorage.setItem("@TOKEN", data.token)
            navigate("/dashboard")
        } catch (error) {
            if (error.response?.data.message === "Incorrect email / password combination") {
                toast.error("Email ou senha não correspondem")
            } else if(error.response?.data.message === "invalid email") {
                toast.error("Email não existe")
            } else {
                toast.error("Algo deu errado, tente novamente mais tarde.")
                console.log(error)
            }
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (formData, setLoading) => {
        try {
            setLoading(true)
            await api.post("/users", formData)
            toast.success("Cadastro realizado")
            navigate("/")
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <UserContext.Provider value={{ user, userLogout, userLogin, userRegister }} >
            {children}
        </UserContext.Provider >
    )
}