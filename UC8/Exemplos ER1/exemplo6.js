let lista = ["Filtro de Ar","Roda","Pneu"]

lista.push("Disco de freio")
lista.push("Motor")
lista.push("Amortecedor")

//lista [2] = "Pastilha" // alterar item da lista pelo indice 

if (lista.length < 10){
    console.log("È possivel cadastrar mais peças!!")
}
else{
    console.log("Não há mais espaço na caixa")
}

let peso = 150
if(peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
}
else{
    console.log("A peça possui o peso adequado")
}

let nome = "Disco de Freio"

switch (nome.length) {
    case 0:
    console.log("O nome da peça não pode ser vazio")
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais de três caracteres")
        break
    default:
        console.log("O nome da peça esta adequado para o cadastro")
        break;
}


/*
if(nome.length > 3){
    console.log("O nome da peça esta adequado para o cadastro")
}
else if(nome.length ==0){
    console.log("O nome da peça não pode ser vazio")
}
else{
    console.log(" O nome da peça deve ter mais de 3 caracteres, digite o nome adequado")
}
*/