function solucao(pesos){
   
    let pesoLutadorA = pesos[0]
    let pesoLutadorB = pesos[1]
    let resultado = (pesoLutadorA - pesoLutadorB)
    console.log(resultado)
    if (resultado <=5 && resultado >=-5) {
       return "PODEM LUTAR";}
       else{
           return "NAO PODEM LUTAR";
       }
    }
    let final = solucao([])
    console.log(final)
    