import { forwardRef } from "react"
import  styles  from "./style.module.scss"

export const Input = forwardRef( ({ error, label, ...rest }, ref) => {
    return (
        <div className={styles.div}>
            <label>{label}</label>
            <input ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})