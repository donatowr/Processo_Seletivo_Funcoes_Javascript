function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

    var itensColetados = ["capa", "sapato", "flexa", "espada", "arco", "escudo", "energia", "escudo" ]

    var itemNecessario1 ="escudo";
    var itemNecessario2 ="capacete";
    var itemNecessario3 ="espada";

    let soma = 0;
for (const elemento of itensColetados){
    if (elemento === itemNecessario1) {soma += 1 }
    if (elemento === itemNecessario2) {soma += 1 }
    if (elemento === itemNecessario3) {soma += 1 }
    }
   
if (soma === 3){
   return "PODE ENFRENTAR";
} else {
    return "NAO PODE ENTRAR";
}

}

console.log(solucao([]))


