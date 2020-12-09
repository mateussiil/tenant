interface IHouses {
    place: string;
    price: Number;
}

export const filterPrice  = (casas: IHouses[]): IHouses[] => {
    let filtrados: IHouses[] = [] 
    
    casas.filter(casa=>{
        if(filtrados.indexOf(casa) === -1){
            filtrados.push(casa)
            return casa.price
        }
    })
    
    return filtrados.sort();
}