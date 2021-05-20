import React from 'react'
import esArray from "../../hooks/esArray"
import retornarErrores from '../../hooks/retornarErrores'
import HappyFace from '../Icons/HappyFace'
import SadFace from '../Icons/SadFace'


export default function InputContainer ({name, input, label, errores, style, value}){
    
    if(esArray(errores[name])){
        console.log("errores[name].length",errores[name].length)
    }
    
    return <>
        <div className={`omrs-input-group `}  style={style}>
            <label className={`omrs-input-underlined ${esArray(errores[name]) && errores[name].length > 0 ? "omrs-input-danger" : (value!=""?"omrs-input-success": "") }`}>
                
                {input}
                <span className="omrs-input-label">{label}</span>
                {esArray(errores[name]) && errores[name].length > 0 
                ? <SadFace />
                : <HappyFace />}
                
                
            </label>
            {retornarErrores({name, errores})}
        </div>
        
       
    </>
}