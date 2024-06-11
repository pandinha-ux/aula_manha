let num = [];
let media;
let soma = 0;

console.log('Informe os números');
process.stdin.on("data", function(data){
    let entrada_usuario = Number(data.toString().trim())
    num.push(entrada_usuario)
    for ( let i = 0; i < num.length; i++){
        soma = soma + num [i]
    }
    media = soma / num.length;
    console.log(" A media é: ", media)
})