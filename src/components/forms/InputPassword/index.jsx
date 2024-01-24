import { forwardRef } from "react"
import  styles  from "./style.module.scss"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { useState } from "react"

export const InputPassword = forwardRef( ({ error, label, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div className={styles.div}>
            <label>{label}</label>
            <input type={isHidden ? "password"  : "text"} ref={ref} {...rest} />
            <button type="button" onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
            </button>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})