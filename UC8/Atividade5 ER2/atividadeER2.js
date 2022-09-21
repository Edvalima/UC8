//Primeira forma de resolver o exercicio

/*
let numeroDealunos = 10;

for(let contador = 0; contador <= numeroDealunos; contador++) 
{

    if(contador == 0){
        //console.log("O numero atual é zero")
        console.log(`${contador} - ZERO`)
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - IMPAR`)
    }
}
*/

//Segunda forma de resolver o exercicio
/*
let numeroDealunos = 10;
let contador = 0
while(contador <= numeroDealunos)
{

    if(contador == 0){
        //console.log("O numero atual é zero")
        console.log(`${contador} - ZERO`)
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - IMPAR`)
    }
    contador++
}
*/

// Terceira forma de resolver o exercicio

let numeroDealunos = 10;
let contador = 0
do
{

    if(contador == 0){
        //console.log("O numero atual é zero")
        console.log(`${contador} - ZERO`)
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - IMPAR`)
    }
    contador++
}while(contador <= numeroDealunos);
