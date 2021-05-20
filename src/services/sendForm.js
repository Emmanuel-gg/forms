import { API_URL, API_VERSION} from './settings'

export default function sendForm(form){
    let endpoint = ""
    switch (form.formulario) {
      case "corto":
        endpoint = "preventaF1"
        break;
      case "postpago":
        endpoint = "preventaF2"
        break;
      case "internet fijo":
        endpoint = "preventaF3"
        break;
      case "internet fijo inalambrico":
        endpoint = "preventaF4"
        break;
    
      default:
        break;
    }
    const api_version =  API_VERSION
    const apiURL = ``
    let config = {
      method: 'POST', 
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(form)
    }
      
    
    return fetch(apiURL, config)
      .catch((error) => console.log(error))
} 