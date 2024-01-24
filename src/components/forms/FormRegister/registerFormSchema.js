import { z } from "zod";

export const registerFormSchema = z.object({
    email: z.string().nonempty("O email é obrigatório").email("Forneça um e-mail válido"),
    password: z.string().nonempty("A senha é obrigatória").min(8, "São necessários pelo menos oito caractéres")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
        .regex(/[0-9]+/, "É necessário conter pelo menos um número")
        .regex(/.*[!@#$%^&*()\-=_+[\]{}|;:'",.<>/?].*/, "É necessário pelo menos um caracter especial"),
    name: z.string().nonempty("O nome é obrigatório").refine(name => {
        const letterFirst = name.charAt(0);
        return letterFirst === letterFirst.toUpperCase();
    }, {
        message: 'A primeira letra do nome deve ser maiúscula.',
    }),
    bio: z.string().nonempty("Fale algo sobre você"),
    contact: z.string().nonempty("Informe algum meio de contado"),
    course_module: z.string().nonempty("Informe algum módulo"),
    confirmPassword: z.string().nonempty("Digite a senha novamente"),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam ser idênticas",
    path: ["confirmPassword"]
})