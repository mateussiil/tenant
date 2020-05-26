export default function filterPrice(data){
    let filtrados =[] 
    
    data.filter(value=>{
        if(filtrados.indexOf(value.price)===-1){
            filtrados.push(value.price)
            return value.price
        }
    })
    
    return filtrados.sort();
}