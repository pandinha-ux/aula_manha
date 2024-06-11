console.log("Digite um número");

var num
 process.stdin.on('data', function(data){
    let numero = Number(data.toString().trim());
    let ehpar = numero % 2 == 0;
         
    if (ehpar){
        console.log("Par!");
    } else {
        console.log("Impar!")
        process.exit();
    }
 })