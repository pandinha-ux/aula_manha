/* let listadenumeros = ["20","14","36","93","7","17"]

console.log("Digite um número");
process.stdin.on("data", function(data){
    let resultado = Number(data.toString().trim());
    for (let i = 0; i < listadenumeros.length; i++){
        if (resultado == listadenumeros[i])
            console.log("Este número está presente")
    }
}); */

var num = [23,34,16,75,93,52,29,46]

console.log("Digite um numero");
process.sdtin.on("data", function(data){
    let resolução = Number(data.tostring().trim());
    for (let i = 0; i < num.length; i++){
        if (resolução == num[i])
            console.log("Está na lista")
    }
});