import { useEffect, useState } from 'react';
import getGeneral from "../services/getGeneral";



export default function useDependiente () {
    const [loading, setLoading] = useState(false)
    
    const [dependientes, setDependiente] = useState([])
    useEffect(() => {
        setLoading(true)
        
        getGeneral({obtener:"campoDependiente"})
            .then((dependienteRespuesta) => {
                setLoading(false)
                setDependiente(dependienteRespuesta)
            })
    }, [])


    return {loading,  dependientes};
}