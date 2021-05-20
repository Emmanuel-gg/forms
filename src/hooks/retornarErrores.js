import esArray from "./esArray"

export default function retornarErrores ({name, errores}){
    const retornarError = function (error, key){
        return <h6 style={{
            margin: "auto",
            paddingTop: "4px"
        }} className="errores" key={key}>{error}</h6>
    }
    if(esArray(errores[name]))
        return errores[name].map(retornarError)
    return ""
}