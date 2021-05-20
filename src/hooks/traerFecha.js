export default function traerFecha (hace,tipo){
    const a = new Date()
    switch (tipo) {
        case 'y':
            a.setFullYear(a.getFullYear() - hace)

            break;
        case 'm':
            a.setMonth(a.getMonth()-hace)
            break;
        case 'd':
            a.setDay(a.getDay()-hace)
            break;
        default:
            break;
    }
    return `${a.getFullYear()}-${('0' + (a.getMonth()+1)).slice(-2)}-${('0' + a.getDate()).slice(-2)}`
    
}