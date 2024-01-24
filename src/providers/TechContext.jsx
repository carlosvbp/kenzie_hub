import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";


export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
  const [techItens, settechItens] = useState([])
  const [editingTech, setEditingTech] = useState(null)

  const [isOpen, setIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const token = localStorage.getItem("@TOKEN")

  useEffect(() => {
    const userLogin = async () => {
      try {
        await api
          .get("/profile", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            settechItens(res.data.techs)
          });
      } catch (error) {
        console.log(error)
      }
    };
    userLogin()
  }, [])

  const createTech = async (formData) => {
    try {
      const newTech = { ...formData }
      const { data } = await api.post("/users/techs", newTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      settechItens([...techItens, data])
      toast.success("Tecnologia criada com sucesso!")
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTech = async (removeId) => {
    try {
      await api.delete(`/users/techs/${removeId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      const newTech = techItens.filter(tech => tech.id !== removeId)
      settechItens(newTech)
      toast.success("Tecnologia deletada com sucesso!")
    } catch (error) {
      console.log(error)
    }
  }

  const editTech = async (formData) => {
    console.log(token)
    try {
      const { data } = await api.put(`/users/techs/${editingTech.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      const newTechList = techItens.map(tech => {
        if (tech.id === editingTech.id) {
          return data
        } else {
          return tech
        }
      })
      settechItens(newTechList)
      setModalEditIsOpen(false)
      toast.success("Tecnologia editada com sucesso!")
    } catch (error) {
      console.log(error)
    }
  }

  const submit = (formData) => {
    createTech(formData)
    setIsOpen(false)
  }

  return (
    <TechContext.Provider value={{
      techItens, setIsOpen, submit, isOpen,
      deleteTech, setEditingTech, setModalEditIsOpen,
      modalEditIsOpen, editingTech, editTech
    }}>
      {children}
    </TechContext.Provider>
  )
}