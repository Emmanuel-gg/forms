import React, { useEffect, useState } from 'react'

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

export default function Formulario2 (){
    
    
    
    const [formValues, setFormValues] = useState({
        campoTexto:"",
        campoSelect:"",
        dependeDeSelect:"",
        exactoNumero:"",
        seleccionDependiente:"",
        seleccionDependeDe:"",
        otroCampo:"",
        otroCampo2:"",
        otroCampo3:"",
        otroCampo4:"",
        otroCampo5:"",
        otroCampo6:"",
    })
    const {
        campoTexto,
        campoSelect,
        dependeDeSelect,
        exactoNumero,
        seleccionDependiente,
        seleccionDependeDe,
        otroCampo,
        otroCampo2,
        otroCampo3,
        otroCampo4,
        otroCampo5,
        otroCampo6,
        
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
    return <div className="form image2">
        <form onSubmit={handleSubmit} noValidate style={{
            textAlign: "center"
        }}>
            <h3>Formulario largo</h3>
            <div className="container-form" style={{
                marginBottom: "10px"
            }}>
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
                <InputContainer 
                    name="otroCampo"
                    errores={errores}
                    input={
                        <input                         
                            name = "otroCampo"
                            type ="text"                         
                            value={otroCampo}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            required
                        />
                    }
                    value={otroCampo}
                    label="Otro campo"
                />
                <InputContainer 
                    name="otroCampo2"
                    errores={errores}
                    input={
                        <input                         
                            name = "otroCampo2"
                            type ="text"                         
                            value={otroCampo2}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            required
                        />
                    }
                    value={otroCampo2}
                    label="Otro campo 2"
                />
                <InputContainer 
                    name="otroCampo3"
                    errores={errores}
                    input={
                        <input                         
                            name = "otroCampo3"
                            type ="text"                         
                            value={otroCampo3}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            required
                        />
                    }
                    value={otroCampo3}
                    label="Otro campo 3"
                />
                <InputContainer 
                    name="otroCampo4"
                    errores={errores}
                    input={
                        <input                         
                            name = "otroCampo4"
                            type ="text"                         
                            value={otroCampo4}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            required
                        />
                    }
                    value={otroCampo4}
                    label="Otro campo 4"
                />
                <InputContainer 
                    name="otroCampo5"
                    errores={errores}
                    input={
                        <input                         
                            name = "otroCampo5"
                            type ="text"                         
                            value={otroCampo5}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            required
                        />
                    }
                    value={otroCampo5}
                    label="Otro campo 5"
                />
                <InputContainer 
                    name="otroCampo6"
                    errores={errores}
                    input={
                        <input                         
                            name = "otroCampo6"
                            type ="text"                         
                            value={otroCampo6}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            required
                        />
                    }
                    value={otroCampo6}
                    label="Otro campo 6"
                />
            </div>
            
            <button className={`botonEnviar `} type="submit">Enviar</button>
            {
                mensaje !== "" ? <p style={
                    (tipoMensaje === "exito")
                    ? {color:"green"}
                    : {color:"red"}
                }>{mensaje}</p> : ""
            }
        </form>
    </div>
    /*
    
    <form onSubmit={handleSubmit} noValidate style={{
            textAlign: "center"
        }}>
            <h2>Formulario largo</h2>
            
            <div className="container-form" style={{
                marginBottom: "10px"
            }}>
                <InputContainer
                    name="tipoDocumento"
                    errores={errores}
                    input={
                        <select
                            className="input__field"
                            value={tipoDocumento}
                            name="tipoDocumento"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        >
                            <option value="">Seleccione</option>
                            {
                                (tipoDocumentos) ? tipoDocumentos.map((tipoDoc, index) => <option key={`tipo-documento-${index}`}>{tipoDoc.tipo_documento}</option>) : ""

                            }
                        </select>
                    }
                    label="Documento de identidad(*)"
                    loading={loadingTipoDocumentos}
                />
                <InputContainer
                    name="numeroDocumento"
                    errores={errores}
                    input={
                        <input
                            className="input__field"
                            name="numeroDocumento"
                            type="text"
                            placeholder=" "
                            value={numeroDocumento}
                            maxLength={
                                (tipoDocumento === "DNI")
                                    ? 8
                                    : (
                                        (tipoDocumento === "Carnet de extranjería" || tipoDocumento === "Pasaporte")
                                            ? 12
                                            : (
                                                (tipoDocumento === "RUC")
                                                    ? 11
                                                    : 12
                                            )
                                    )
                            }
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Número de documento(*)"
                />
                <InputContainer
                    name="fechaNacimiento"
                    errores={errores}
                    input={
                        <input
                            className="input__field"
                            name="fechaNacimiento"
                            type="date"
                            max={traerFecha("18", "y")}
                            value={fechaNacimiento}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Fecha de nacimiento(*)"
                />
                <InputContainer
                    name="apellidoPaterno"
                    errores={errores}
                    otraCosa="letras"
                    input={
                        <input
                            className="input__field"
                            name="apellidoPaterno"
                            type="text"
                            placeholder=" "
                            value={apellidoPaterno}
                            maxLength="20"
                            onChange={(e) => {
                                e.target.pattern = "letras"
                                handleInputChange(e)
                            }}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Apellido Paterno(*)"
                />
                <InputContainer
                    name="apellidoMaterno"
                    errores={errores}
                    input={
                        <input
                            className="input__field"
                            name="apellidoMaterno"
                            type="text"
                            placeholder=" "
                            value={apellidoMaterno}
                            maxLength="20"
                            onChange={(e) => {
                                e.target.pattern = "letras"
                                handleInputChange(e)
                            }}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Apellido Materno(*)"
                />
                <InputContainer
                    name="nombres"
                    errores={errores}
                    input={
                        <input
                            className="input__field"
                            name="nombres"
                            type="text"
                            placeholder=" "
                            value={nombres}
                            maxLength="50"
                            onChange={(e) => {
                                e.target.pattern = "letras"
                                handleInputChange(e)
                            }}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Nombres(*)"
                />
                <InputContainer
                    name="correo"
                    errores={errores}
                    input={
                        <input
                            className="input__field"
                            name="correo"
                            type="email"
                            placeholder=" "
                            value={correo}
                            maxLength="50"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Dirección de correo electrónico(*)"
                />
                <InputContainer
                    name="telefonoFijo"
                    errores={errores}
                    input={
                        <input
                            className="input__field"
                            name="telefonoFijo"
                            type="text"
                            placeholder=" "
                            value={telefonoFijo}
                            maxLength="9"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Teléfono Fijo(*)"
                />

                <InputContainer
                    name="telefonoMovil"
                    errores={errores}
                    input={
                        <input
                            className="input__field"
                            name="telefonoMovil"
                            type="text"
                            placeholder=" "
                            value={telefonoMovil}
                            minLength="9"
                            maxLength="9"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        />
                    }
                    label="Célular(*)"
                />
                <InputContainer
                    name="departamento"
                    errores={errores}
                    input={
                        <select
                            className="input__field"
                            name="departamento"
                            value={departamento}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        >
                            <option value="">Seleccione</option>
                            {
                                (departamentos) ? departamentos.map((dep, index) => <option key={`departamento-${index}`}>{dep.nombre}</option>) : ""
                            }
                        </select>
                    }
                    label="Departamento(*)"
                    loading={loadingDepartamentos}
                />
                <InputContainer
                    name="provincia"
                    errores={errores}
                    input={
                        <select
                            className="input__field"
                            name="provincia"
                            value={provincia}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        >
                            <option value="">Seleccione</option>
                            {
                                (provincias) ? provincias.map((pro, index) => <option key={`provincia-${index}`}>{pro.nombre}</option>) : ""
                            }
                        </select>
                    }
                    label="Provincia(*)"
                    loading={loadingProvincias}
                />
                <InputContainer
                    name="distrito"
                    errores={errores}
                    input={
                        <select
                            className="input__field"
                            name="distrito"
                            value={distrito}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        >
                            <option value="">Seleccione</option>
                            {
                                (distritos) ? distritos.map((dis, index) => <option key={`distrito-${index}`}>{dis.nombre}</option>) : ""
                            }
                        </select>
                    }
                    label="Distrito(*)"
                    loading={loadingDistritos}
                />
            </div>
            <div className="container-form" style={{
                margin:"auto"
            }}>
                <InputContainer
                    name="modalidadCompra"
                    errores={errores}
                    input={
                        <select
                            className="input__field"
                            name="modalidadCompra"
                            value={modalidadCompra}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        >
                            <option value="">Seleccione</option>
                            {
                                (modalidadesCompra) ? modalidadesCompra.map((mod, index) => ( (mod.modo === "postpago") ?<option key={`modalidad-compra-${index}`}>{mod.modalidad_compra}</option> : "") ) : ""
                            }
                        </select>
                    }
                    label="Modalidad de compra(*)"
                    loading={loadingModalidadesCompra}
                />
                {
                    modalidadCompra === "Portabilidad" ?
                        <>
                            <InputContainer
                                name="numeroPortar"
                                errores={errores}
                                input={
                                    <input
                                        className="input__field"
                                        name="numeroPortar"
                                        type="text"
                                        placeholder=" "
                                        value={numeroPortar}
                                        minLength="9"
                                        maxLength="9"
                                        onChange={handleInputChange}
                                        onBlur={handleInputChange}

                                    />
                                }
                                label="¿Cuál es el número a portar?(*)"
                            />
                            <InputContainer
                                name="operadorActual"
                                errores={errores}
                                input={
                                    <select
                                        className="input__field"
                                        name="operadorActual"
                                        value={operadorActual}
                                        onChange={handleInputChange}
                                        onBlur={handleInputChange}

                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            (operadores) ? operadores.map((operador, index) => <option key={`operador-${index}`}>{operador.operador}</option>) : ""
                                        }
                                    </select>
                                }
                                label="¿Cual es su operador actual?(*)"
                                loading={loadingOperadores}
                            />
                            <InputContainer
                                name="modalidadActual"
                                errores={errores}
                                input={
                                    <select
                                        className="input__field"
                                        name="modalidadActual"
                                        value={modalidadActual}
                                        onChange={handleInputChange}
                                        onBlur={handleInputChange}

                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            (modalidades) ? modalidades.map((mod, index) => <option key={`modalidad-${index}`}>{mod.modalidad}</option>) : ""
                                        }
                                    </select>
                                }
                                label="¿Cual es su modalidad actual?(*)"
                                loading={loadingModalidades}
                            />
                        </>
                        : ""
                }


                <InputContainer
                    name="plan"
                    errores={errores}
                    input={
                        <select
                            className="input__field"
                            name="plan"
                            value={plan}
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                        >
                            <option value="">Seleccione</option>
                            {
                                (planes) ? planes.map((planMap, index) => ( (planMap.modo === "postpago")?<option key={`plan-${index}`}>{planMap.plan}</option> :"") ) : ""
                            }
                        </select>
                    }
                    label="Plan elegido(*)"
                    loading={loadingPlanes}
                />
            </div>

            <div className="container-form">
                <label style={{
                    margin: "auto"
                }}>¿Desea adquirir un equipo célular también?(*)</label>
                <div className="container-form options-2">
                    <CheckboxContainer
                        name="equipo"
                        input={
                            <input type="radio" name="equipo" value={"Si"} onChange={handleInputChange} />
                        }
                        label="SI"
                    />
                    <CheckboxContainer
                        name="equipo"
                        style={{
                            marginTop: 0
                        }}
                        input={
                            <input type="radio" name="equipo" value={"No"} onChange={handleInputChange} />
                        }
                        errores={errores}
                        label="NO"
                    />
                </div>
                {
                    (equipo === "Si") ?
                        <InputContainer
                            name="presupuesto"
                            errores={errores}
                            style={{
                                margin: "auto 0"
                            }}
                            input={
                                <select
                                    className="input__field"
                                    name="presupuesto"
                                    value={presupuesto}
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}

                                >
                                    <option value="">Seleccione</option>
                                    <option>Menor a 100 soles</option>
                                    <option>De 100 a 500 soles</option>
                                    <option>De 500 a 1000 soles</option>
                                    <option>Más de 1000 soles</option>
                                </select>
                            }
                            label="Presupuesto para el equipo(*)"
                            loading={loadingPlanes}
                        />
                        : ""
                }
            </div>
            <div className="container-form columns-2" style={{
                marginTop: "10px",
                marginBottom: "10px"
            }}>
                <InputContainer
                    name="direccion"
                    errores={errores}
                    input={
                        <textarea
                            className="input__field"
                            name="direccion"
                            type="text"
                            placeholder=" "
                            maxLength="200"
                            rows="3"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                            value={direccion}
                        />
                    }
                    label="Dirección exacta(*)"
                />
                <InputContainer
                    name="referencia"
                    errores={errores}
                    input={
                        <textarea
                            className="input__field"
                            name="referencia"
                            type="text"
                            placeholder=" "
                            maxLength="250"
                            rows="3"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}

                            value={referencia}
                        />
                    }
                    label="Referencia de como llegar(*)"
                />

            </div>
            <div className="container-form columns-2">
                <label style={{
                    margin: "auto"
                }}>¿Cumples con los siguientes requisitos?(*) <br />
                        1. Tener 3 meses o más con el operador actual <br />
                        2. No tener deuda con su actual operador</label>
                <div className="container-form options-2 margin-left-0-md">

                    <CheckboxContainer
                        name="requisitos"
                        input={
                            <input type="radio" name="requisitos" value={"Si"} onChange={handleInputChange} />
                        }
                        label="SI"
                    />
                    <CheckboxContainer
                        name="requisitos"
                        input={
                            <input type="radio" name="requisitos" value={"No"} onChange={handleInputChange} />
                        }
                        errores={errores}
                        label="NO"
                    />
                </div>
            </div>
            <CheckboxContainer
                input={
                    <input type="checkbox" name="terminos" value={terminos} onChange={handleInputChange}
                        onBlur={handleInputChange} />
                }
                name="terminos"
                errores={errores}
                label={<>Mediante la presente acepto el <a target="_blank" href="https://8ae4dd7a-1097-4297-9b89-30fa1a3e0d6d.filesusr.com/ugd/2e5151_f13558cb8a324a3ea6623ad12a32a459.pdf"> tratamiento de mis datos personales</a></>}
            />
            <label style={{ display: "block" }}><span style={{ color: "red" }}>(*)</span> Requerido</label>
            <button className={`botonEnviar ${((!formularioValido) ? "desabilitado" : "")}`} type="submit">Enviar</button>
            {
                mensaje !== "" ? <p style={
                    (tipoMensaje === "exito")
                        ? { color: "green" }
                        : { color: "red" }
                }>{mensaje}</p> : ""
            }
        </form>
    
    
    */ 
}