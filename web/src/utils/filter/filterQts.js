export default function filterQts(data){
        let filtrados = [];
        for(let i=0; i<data.length; i++){
            if(filtrados.indexOf(data[i].price)===-1){
                filtrados.push(data[i].price)
            }
        }
        return filtrados;
}