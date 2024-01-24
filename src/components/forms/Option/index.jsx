import { forwardRef } from "react"

export const Option = forwardRef(({ error, label,...rest  }, ref) => {
    return (
        <>
            <option error={error} {...rest} label={label} ref={ref}></option>
            {error ? <p>{error.message}</p> : null}
        </>
    )
})