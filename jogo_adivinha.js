//EXEMPLO
/*const aleatorio = Math.floor(Math.random() * 100);
console.log(aleatorio);*/

// TESTE 1
/*let num = "";
let aleatorio = Math.floor(Math.random() * 100 + 1);

console.log("Adivinhe o número");
process.stdin.on("data", function(data){
    num = data.toString().trim()
    if (num == "sair" || num == "desisto") {
        console.log("Vc desistiu o numero era " + aleatorio);
        process.exit();
    }
        
    if (+num == aleatorio){
        console.log("Voce acertou! Digite outro numero ou sair");
        aleatorio = Math.floor(Math.random() * 10 + 1);

    } else {
        console.log("Voce errou, tente novamente ou desista ");
    }
});*/

//EXEMPLO 2
let num = "";
let aleatorio = Math.floor(Math.random() * 100 + 1);

console.log("Adivinhe o número");
process.stdin.on("data", function(data){
    if (data.toString().trim() == "sair" || data.toString().trim() == "desisto") {
        console.log("Vc desistiu o numero era " + aleatorio);
        process.exit();
    }
    num = Number(data.toString().trim())
    
    if (+num == aleatorio){
        console.log("Voce acertou! Digite outro numero ou sair");
        aleatorio = Math.floor(Math.random() * 100 + 1);

    } else {
        console.log("Voce errou, tente novamente ou desista ");
    }
});
