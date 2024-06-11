let frase = "";

console.log("Digite uma frase");
process.stdin.on("data", function(data){
    frase = data.toString().trim();
    console.log("o tamanho da frase é", frase.length)
});

/*console.log("Hoje é um lindo dia para salvar vidas".length);*/