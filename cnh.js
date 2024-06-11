let nome = "";
let idade = "";
let maiordeidade = "";

console.log('Escreva seu nome');
 process.stdin.on("data", function(data){
    if (!nome){
        nome = data.toString().trim();
        process.stdout.write("Quantos anos você tem? \n");
    } else if (!idade) {
        idade = data.toString().trim();
        process.stdout.write("Olá " + nome + ", você tem " + idade + " anos. \n");
        console.log("Você é maior de 18?");
 } else {
    maiordeidade= data.toString().trim();
    if (maiordeidade== "sim" || maiordeidade == "s"){
         
        console.log("Pode fazer a cnh"); 
    } 
        process.exit()
    }
 }
);
