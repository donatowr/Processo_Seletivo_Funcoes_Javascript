//percorrer arreys e listas
let carros = ["uno", "monza", "ka", "camaro", "gol", "prisma" ]
let modelocerto = 0;
for (const modelos of carros) {
if (modelos === "uno") {modelocerto +=1}
if (modelos === "camaro") {modelocerto +=1}
if (modelos === "prisma") {modelocerto +=1}
    
}
console.log(modelocerto);