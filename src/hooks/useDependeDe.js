import { useEffect, useState } from 'react';
import getGeneral from '../services/getGeneral';



export default function useCamposQueDependen ({dependiente}) {
    
    const [loading, setLoading] = useState(false)
    
    const [camposQueDependen, setCamposQueDependen] = useState([])
    useEffect(() => {
        setLoading(true)
        if(dependiente !== ""){
            getGeneral({obtener:"campoQueDepende", id:dependiente})
            .then((camposQueDependenRespuesta) => {
                setLoading(false)
                setCamposQueDependen(camposQueDependenRespuesta)
            })
        }
        
    }, [dependiente])


    return {loading,  camposQueDependen};
}