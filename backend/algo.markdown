### Criar tabela rent
    Quando o clinte aluga uma casa ele é adicionado

    Tabela user
        idUser - PK
        idade 
        nome

    Tabela house
        idHouse - PK
        valor 
        qtdPeoples  #quantidades de pessoas maximas

    Tabela rent
        idRent - PK
        idUser - FK
        idHouse - FK
        saida - false || date
        entrada - date

### Como funciona o Aluguel?

    No frontend o cliente aluga a casa, chama a rota post('/rent')

    user(inquilo) -> alugaCasa('/rent')

    recebe o id da casa e do user

    rent.index({
        inquilo_id,
        casa_id,
    })

    busca a casa e atualiza o qtdDePessoas (-1)

    house.put({
        qtdDePessoas: qtdDePessoas -1
    })


    