let aluno = [];
let usuario = {
    nome: "",
    idade: "",
    curso:"",
};
console.log("informe seu nome");
process.stdin.on("data", function(data){
    if (data.toString().trim() == "sair") {
        console.log(aluno)
        process.exit();
    }
    if (!usuario.nome){
        usuario.nome = data.toString().trim();
        console.log('Informe sua idade');
    } else if (!usuario.idade){
        usuario.idade = data.toString().trim();
        console.log('Informe seu curso');
    } else if (!usuario.curso){
        usuario.curso = data.toString().trim();
        aluno.push(usuario)
        usuario = {
            nome: "",
            idade: "",
            curso:"",
        }
        console.log("Digite sair")
    }
})