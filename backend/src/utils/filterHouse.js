function filterHouse(houses, price, qtdPeoples, qtdQuartos){
        houses.filter(house=>{
            if(price){
                if(qtdQuartos){
                    if(qtdPeoples){
                        return house.price<=price||house.qtdQuartos==qtdQuartos||house.qtdPeoples==qtdPeoples
                    }else{
                        return house.price<=price||house.qtdQuartos==qtdQuartos
                    }
                }else{
                    if(qtdPeoples){
                        return house.price<=price||house.qtdPeoples==qtdPeoples
                    }else{
                        return house.price<=price
                    }
                }
            }else{
                if(qtdQuartos){
                    if(qtdPeoples){
                        return house.qtdQuartos==qtdQuartos||house.qtdPeoples==qtdPeoples
                    }else{
                        return house.qtdQuartos==qtdQuartos
                    }
                }else{
                    if(qtdPeoples){
                        return house.qtdPeoples==qtdPeoples
                    }else{
                        return house
                    }
                }
            }
        })
    }

module.exports = filterHouse;