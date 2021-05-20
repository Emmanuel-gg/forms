import React, { useState } from "react";
import esArray from "./esArray";
import traerFecha from "./traerFecha";
const mensajeError = {
    requerido: (valor)=> (valor === "radio")? 'Debe seleccionar uno de los campos' : 'Este campo es requerido',
    minimo:(min)=> {return `Este campo necesita (${min}) carácteres`},
    email: "Debe ingresar un correo válido",
    letras: "El campo solo puede contener letras",
    personalizado: (error)=>error
}
const expresionesRegulares = {
    email:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    letras: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,}$/i
}
export default function useForm ({formValues,setFormValues,camposRequeridos,setCamposRequeridos, formulario}){
    
    const contadorElemento = function(matrizValores, busqueda) {
        let acumulador = 0;
        for (let i = 0; i<matrizValores.length; i++) {
            if (matrizValores[i] === busqueda) {
                acumulador++;
            }
        }
        return acumulador;
    }
    const esRadio = function (name){
        return (contadorElemento(camposRequeridos,name) > 1)
    }
    const retornarFuncionOVariable =  function (error, valor){
        return (valor !== null) ? mensajeError[error](valor) : mensajeError[error]
    }
    const formularioEsValido = function (setearErrores = false) {
        let newErrores = {}
        camposRequeridos.forEach( (campo) => {                        
            let campoValido = (formValues[campo] !== "" && formValues[campo] !== false)      
            newErrores[campo] = errores[campo]
            if(!campoValido){                
                
                if(esArray(errores[campo]) !== true){
                    
                    newErrores[campo] = [mensajeError.requerido(esRadio(campo) ? "radio" : "normal")]
                }else{
                    if(!errores[campo].some((errorB) => {
                            return errorB === mensajeError.requerido(esRadio(campo) ? "radio" : "normal")
                    })){
                        errores[campo].push(mensajeError.requerido(esRadio(campo) ? "radio" : "normal"))
                        
                    }
                    newErrores[campo] = errores[campo]
                    
                }
                
            }                     
                
        })                
        if(setearErrores === true){
            //
            setErrores(newErrores)
            
        }
        const contieneError = []        
        for (var i in newErrores) {
            if (newErrores.hasOwnProperty(i)) {
                contieneError.push(newErrores[i].length > 0)
            }
        }        
        setFormularioValido(!contieneError.includes(true))

        
        return !contieneError.includes(true)
    }
    const colocarError = function (campo,error,valor=null){
        setFormularioValido(false)
        if(!esArray(errores[campo])){
            
            let newErrores = errores[campo]
            newErrores = [retornarFuncionOVariable(error, valor)]

            return newErrores
        }else{
            if(!errores[campo].some((errorB) => {
                if(valor !== null){
                    return errorB === mensajeError[error](valor)
                }else{
                    return errorB === mensajeError[error]
                }
            })){
                let newErrores = errores[campo]
                newErrores.push(retornarFuncionOVariable(error, valor))

                return newErrores
            }
            
        }
    }
    /*const eliminarError = function (erroresCampo, error, valor=null){
        if(esArray(erroresCampo)){
            
            let newErrores =[]            
            newErrores = erroresCampo.filter((errorB) => {                                                 
                return errorB !== retornarFuncionOVariable(error,valor)
            })  
            return newErrores
            
        }
        return []
    }*/
    
    const handleInputChange = function ({target:{name, value, minLength,type, max, pattern},type:event}){//        
        const tipoError = (type === "radio") ? type : "normal"        
        let newErrores = []
        let newErroresPersonalizados = []                            
       
        if(name === "modalidadCompra" && event == "change"){
            if(value === "Portabilidad"){
                let newArray = camposRequeridos
                
                if(formulario && formulario!="3"){
                    newArray.push("modalidadActual")
                    newArray.push("numeroPortar")
                }
                newArray.push("operadorActual")
                
                setCamposRequeridos(newArray)
            }else{
                let newArray = camposRequeridos
                newArray = newArray.filter((campo) =>(campo !== "numeroPortar" && campo !== "operadorActual" && campo !== "modalidadActual"))
                setCamposRequeridos(newArray)
                
            }
        }


        if(camposRequeridos.includes(name)){               
            if(type === "checkbox") {
                if(event === "change"){
                    if(!formValues[name] === false ){
                        newErrores.push(mensajeError.requerido(tipoError))            
                    } 
                }else{
                    if(formValues[name] === false ){
                        newErrores.push(mensajeError.requerido(tipoError))            
                    } 
                }
            }else{
                if(value === "" ){
                    newErrores.push(mensajeError.requerido(tipoError))            
                }
            }
            
        }
        if(minLength !== -1 && minLength !== undefined){
            if(value.length < minLength){
                newErrores.push(mensajeError.minimo(minLength))      
            }
        }

        if(name === "campoSelect" || name === "dependeDeSelect" ){
            if(name === "campoSelect" ) {
                if(esArray( errores.dependeDeSelect)){
                    newErroresPersonalizados = errores.dependeDeSelect.filter((a)=>a!=="El campo debe comenzar por 1234")
                }
                
                let comienzoNumero = formValues.dependeDeSelect.slice(0,2)

                if(comienzoNumero !== "1234" && value === "1234"){
                    
                    newErroresPersonalizados.push(mensajeError.personalizado("El campo debe comenzar por 1234"))                
                }
            }else{
                if(name === "dependeDeSelect" && formValues.campoSelect === "1234") {
                    let comienzoNumero = value.slice(0,4)
                    if(comienzoNumero !== "1234" ){
                        newErrores.push(mensajeError.personalizado("El campo debe comenzar por 1234"))
                    }           
                }
            }
        }else{
            newErroresPersonalizados = errores["dependeDeSelect"] || []
        }
        
        if(pattern){
            const emailRegex = expresionesRegulares[pattern];
            if (!emailRegex.test(value)){
                newErrores.push(mensajeError[pattern])
            }
        }
        if(type === "email"){
            const emailRegex = expresionesRegulares.email;
            if (!emailRegex.test(value)){
                newErrores.push(mensajeError.email)
            }
        }        
        if(name === "dependeDeSelect"){
            setErrores({
                ...errores,
                [name]:newErrores
            })
        }else{
            setErrores({
                ...errores,
                [name]:newErrores,
                dependeDeSelect: newErroresPersonalizados
            })
        }
        if(newErrores.length > 0){
            setFormularioValido(false)
        }
        if(event == "change"){
            setFormValues({
                ...formValues,
                [name]:(type==='checkbox')? !formValues[name] : value
            })
        }
            
        
            
        formularioEsValido(false)
        
        
        
    }
    
    const [formularioValido, setFormularioValido] = useState(false)

    
    

    const [errores, setErrores] = useState({})
    return{formularioValido,formularioEsValido,handleInputChange,errores,colocarError,setErrores}
}