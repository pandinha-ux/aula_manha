console.log("Hoje é um lindo dia para salvar vidas".length);

let boolean = false 

console.log(typeof boolean);

const sortidos = [[1, 2, 3], 20, 30, "quarenta", true];

sortidos.push("quarenta");
sortidos.unshift(0);
sortidos.indexOf();
sortidos.includes(0);

const obj = {
    nome: ale,
    sobrenome: fernades,
    idade: 35,
    solteiro: false,
    pets: [ "cachorro"],
    endereço: {
        rua: leopoldino,
        numero: 397,
    }
};

let dia = true
let frio = true

if (dia && frio){
    console.log("Bom dia");
};


let nome = "";
let sobrenome = "";
let idade = "";

console.log("Qual é seu nome?");
process.sdtin.on("data", function(data){
    if (!nome){
        nome = data.toString().trim()
        process.stdout.write("Qual é seu sobrenome?  \n");
    } else if (!sobrenome) {
        sobrenome = data.toString().trim();
        process

    }
});