let entrada
let resultado 
 console.log("digite um número para efetuar a tabuada");
 process.stdin.on("data", function(data){
    entrada = Number(data.toString().trim())
    for (let i = 1; i <= 10; i++){
        resultado = i * entrada
        console.log(entrada + "x" + i + "=" + resultado)
    }
 })