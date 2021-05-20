import React from 'react'
import retornarErrores from '../../hooks/retornarErrores'

export default function CheckboxContainer ({input, label, name, errores, style} = {}){
    console.log("errores",errores)
    return <>
        <div className="input checkbox" style={style}>
            
            <label className="container" style={{
                paddingTop: "12px"
            }}>
                {label}
                {input}
                <span className="checkmark"></span>
            </label>
            
        </div>
        {(errores) ? retornarErrores({name, errores}) : ""}
    </>
}