export default function filterCity(data){
    let filtrados = [];
    for(let i=0; i<data.length; i++){
        if(filtrados.indexOf(data[i].city)===-1){
            filtrados.push(data[i].city)
        }
    }
    return filtrados;
}