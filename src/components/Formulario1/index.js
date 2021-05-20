import React, {useEffect, useState} from 'react'

import useForm from '../../hooks/useForm'
import InputContainer from '../InputContainer'
import CheckboxContainer from '../CheckboxContainer'

import '../../styles/Form.scss'
import useDependiente from '../../hooks/useDependiente'
import useDependeDe from '../../hooks/useDependeDe'

import sendForm from '../../services/sendForm'

import HappyFace from '../Icons/HappyFace'

const camposRequeridos = [
    "campoSelect",
    "dependeDeSelect",
    "campoTexto"
]

export default function Formulario1 (){
    
    
    
    const [formValues, setFormValues] = useState({
        campoTexto:"",
        campoSelect:"",
        dependeDeSelect:"",
        exactoNumero:"",
        seleccionDependiente:"",
        seleccionDependeDe:"",
    })
    const {
        campoTexto,
        campoSelect,
        dependeDeSelect,
        exactoNumero,
        seleccionDependiente,
        seleccionDependeDe,
        
    } = formValues
    const {formularioValido,formularioEsValido,handleInputChange,errores} = useForm({formValues,setFormValues,camposRequeridos})
   
    const {loading:loadingDependientes, dependientes} = useDependiente()
    const {loading:loadingDependenDe, camposQueDependen} = useDependeDe({ dependiente:seleccionDependiente})

    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState("")

    const handleSubmit = function(e){
        
        if(formularioEsValido(true)){
            let form = {
                
            }
            sendForm(form)
            .then(()=>{
                setMensaje("Formulario enviado correctamente")
                setTipoMensaje("exito")
            })
            .catch((err)=>{
                console.log(err)
                setMensaje("Ocurrió un error")
                setTipoMensaje("error")
            })
        }
        e.preventDefault()
    }
    
    return <form onSubmit={handleSubmit} noValidate style={{
            textAlign: "center"
        }}>
            <h3>Formulario pequeño</h3>
            <InputContainer 
                name="campoTexto"
                errores={errores}
                input={
                    <input                         
                        name= "campoTexto"
                        type="text"                         
                        value={campoTexto}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        required
                        />
                }
                value={campoTexto}
                label="Campo de texto (Requerido)"
            />
            <InputContainer 
                name="campoSelect"
                errores={errores}
                style={{marginTop: "3.5rem"}}
                input={
                    <select 
                        className="input__field"                        
                        value={campoSelect}
                        name="campoSelect"
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                    >
                        <option value="">Seleccione</option>
                        <option value="1234">Comienza por 1234</option>
                        
                    </select>
                }
                value={campoSelect}
                label="Campo de selección (Requerido)"
            />
            
            <InputContainer 
                name="dependeDeSelect"
                errores={errores}
                input={
                    <input 
                        className=""
                        name= "dependeDeSelect"
                        type="text"                         
                        value={dependeDeSelect}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        required
                        />
                }
                value={dependeDeSelect}
                label="Depende del anterior (Requerido)"
            />
            <InputContainer 
                name="exactoNumero"
                errores={errores}
                input={
                    <input                         
                        name = "exactoNumero"
                        type ="text"                         
                        value={exactoNumero}
                        minLength="4"
                        maxLength="4"
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        required
                    />
                }
                value={exactoNumero}
                label="Exactamente 4 caracteres"
            />
            <InputContainer 
                name="seleccionDependiente"
                errores={errores}
                style={{marginTop: "3.5rem"}}
                input={
                    <select 
                        className="input__field"                        
                        name= "seleccionDependiente"
                        value={seleccionDependiente}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                     >
                        <option value="">Seleccione</option>
                        {
                            (dependientes) ? dependientes.map((dep, index) => <option key={`dependientes-${index}`}>{dep.nombre}</option>):""
                        }
                    </select>
                }
                value={seleccionDependiente}
                label="Selección de pendiente"
                loading={loadingDependientes}
            />
            <InputContainer 
                name="seleccionDependeDe"
                errores={errores}
                style={{marginTop: "3.5rem"}}
                input={
                    <select 
                        className="input__field"                        
                        name="seleccionDependeDe"
                        value={seleccionDependeDe}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                    >
                        <option value="">Seleccione</option>
                        {
                            (camposQueDependen) ? camposQueDependen.map((dep, index) => <option key={`camposQueDependen-${index}`}>{dep.nombre}</option>):""
                        }
                    </select>
                }
                value={seleccionDependeDe}
                label="Selección que depende del anterior"
                loading={loadingDependenDe}
            />
            
            <button className={`botonEnviar `} type="submit">Enviar</button>
            {
                mensaje !== "" ? <p style={
                    (tipoMensaje === "exito")
                    ? {color:"green"}
                    : {color:"red"}
                }>{mensaje}</p> : ""
            }
        </form>
}