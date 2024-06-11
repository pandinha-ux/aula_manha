const biblioteca = []
let livros = {
    autor: "",
    tamanho: "",
    titulo: "",
    gênero: "",
};

console.log("Digite o titulo de alguns livros que você já leu")
process.stdin.on("data", function(data){
        if (data.toString().trim() == "sair") {
            console.log(biblioteca);
            process.exit();
        }
        if (!livros.titulo){
            livros.titulo = data.toString().trim()
            console.log("digite o autor do livro");
        } else if (!livros.autor){
            livros.autor = data.toString().trim()
            console.log("digite o tamanho (páginas) do livro");
        } else if (!livros.tamanho){
            livros.tamanho =  data.toString().trim()
            console.log("Digite o gênero do livro");
        } else if (!livros.gênero){
            livros.gênero = data.toString().trim()
            biblioteca.push(livros)
            livros = {
                autor: "",
                tamanho: "",
                titulo: "",
                gênero: "",
            }
            console.log("Digite outros livros começando pelo titulo, ou digite sair")
        }
});