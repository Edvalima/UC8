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
