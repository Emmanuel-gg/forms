import {API_URL} from './settings'

export default function getGeneral({obtener, id}){
    const apiURL = `${API_URL}${obtener}/${id?id:""}`
    let config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        }
    }
    let objeto;
    if(obtener ==="campoDependiente"){
        objeto = [
            {
                nombre:"Dependiente 1"
            },
            {
                nombre:"Dependiente 2"
            },
            {
                nombre:"Dependiente 3"
            },
            {
                nombre:"Dependiente 4"
            },
        ]
    }else if(obtener ==="campoQueDepende") {
        objeto = [
            {
                nombre:"Depende de 1 - 1",
                depende:"Dependiente 1"
            },
            {
                nombre:"Depende de 1 - 2",
                depende:"Dependiente 1"
            },
            {
                nombre:"Depende de 1 - 3",
                depende:"Dependiente 1"
            },
            {
                nombre:"Depende de 1 - 4",
                depende:"Dependiente 1"
            },
            {
                nombre:"Depende de 2 - 1",
                depende:"Dependiente 2"
            },
            {
                nombre:"Depende de 2 - 2",
                depende:"Dependiente 2"
            },
            {
                nombre:"Depende de 2 - 3",
                depende:"Dependiente 2"
            },
            {
                nombre:"Depende de 2 - 4",
                depende:"Dependiente 2"
            },
            {
                nombre:"Depende de 3 - 1",
                depende:"Dependiente 3"
            },
            {
                nombre:"Depende de 3 - 2",
                depende:"Dependiente 3"
            },
            {
                nombre:"Depende de 3 - 3",
                depende:"Dependiente 3"
            },
            {
                nombre:"Depende de 3 - 4",
                depende:"Dependiente 3"
            },
            {
                nombre:"Depende de 4 - 1",
                depende:"Dependiente 4"
            },
            {
                nombre:"Depende de 4 - 2",
                depende:"Dependiente 4"
            },
            {
                nombre:"Depende de 4 - 3",
                depende:"Dependiente 4"
            },
            {
                nombre:"Depende de 4 - 4",
                depende:"Dependiente 4"
            },
        ]
    }
    return new Promise((resolve)=>{
        
        
        setTimeout(()=>{
            let resultado;
            if(id){
                resultado = objeto.filter((obj) => obj.depende === id)
            }else{
                resultado = objeto
            }
            console.log("resultado", resultado)
            resolve(resultado)
        }, 1000)
    })
    .catch((error) => console.log(error))
} 