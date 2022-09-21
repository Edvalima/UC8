/*regras para operadores de comparação.
ao comparar duas coisas o resultado é booleano, por tanto true ou false
= (è utilizado para atribuição de uma variável)
== p/ comparação (verificando se é igual.)
=== p/ comparação ( verifica se é identico, portanto mesmo tipo de dado e valor)
!= Diferente
< Menor
> Maior
<= Menor ou igual
>= Maior ou igual 
*/

/* Operadores de atribuição
=atribuição
+= (x+= y) é a mesma coisa que (x = x + y)
-= (x-= Y) é a mesma coisa que (x = x - y)
*= (x*= y) é a mesma coisa que (x = x * y)
/= (x/= y) é a mesma coisa que (x = x / y)
*/
 
/*Operadores lógicos
&& (e)
|| (ou)
! (negação)

Operador E
V && V = V
V && F = F
F && F = F 
F && V = F
Posso definir que com o operador E a respostas será verdadeira 
se ambas as proposições forem verdadeiras.

Operador OU
V || V = V
V || F = V
F || F = F
F || V = V
Posso definir que com o operador OU a resposta apenas será falsa
se ambas as proposições forem falsas.
*/

let x = false 
let y = true 
let resultado = (x || y) 
console.log(resultado) 

