/*Faça um script em javascript: crie um script em JavaScript que solicita o nome do usuário, solicita a idade do usuário, 
verifica se o mesmo é maior de idade e exibe uma saudação diferente caso seja menor de idade.*/

let nome = "";
let idade = "";

console.log("informe seu nome");
process.stdin.on("data", function(data){
    if (!nome){
        nome = data.toString().trim();
        console.log("Informe sua idade");
    } else if (!idade){
        idade = data.toString().trim();
        if (idade >= 18) {
            console.log("Parabéns, já pode tirar sua habilitação")
        } else {
            console.log("Que pena, infelizmente não poderá tirar a sua cnh")
        }
    }
});