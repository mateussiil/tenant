interface IHouses {
    place: string;
    price: Number;
}

// Filtrar casas da cidade


export const filterCity = (city: IHouses[] ) => {
    let filtrados = [];
    for(let i=0; i<city.length; i++){
        if(filtrados.indexOf(city[i].place)===-1){
            filtrados.push(city[i].place)
        }
    }
    return filtrados;
}