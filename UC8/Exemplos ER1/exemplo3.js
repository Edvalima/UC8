//Sistema para um radar de velocidade 

//variaveis
let velocidade;

//entrada
//velocidade = 99;
velocidade = Number(prompt("Digite a velocidade!!"))

//processamento / saida
if (velocidade > 110){
    //console.log("Você foi multado!!")
    alert("Você foi multado!!")
}
else 
    {
        if(velocidade >100 && velocidade <110){
            //console.log("Você esta sendo notificado por andar acima do limite")
            alert("Você esta sendo notificado por andar acima do limite")
        }
            else{
            //console.log("Você esta dentro do limite de velocidade")
            alert("Você esta dentro do limite de velocidade")
        }

    }
   
//saida