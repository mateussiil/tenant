export default function filterImage(data, idHouse){
    for(let i=0; i<data.length;i++){
        if(data[i].id_house===idHouse){
            return data[i].url
        }
    }
}