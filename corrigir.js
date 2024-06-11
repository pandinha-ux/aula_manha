/*const dia = true

if(dia) {
    console.log("Bom dia");
} else (!dia) 
    console.log("Boa noite");
}

dia = false;

let aluno {
    frio = true,
    molhado = true,
}

if(aluno.molhado EE aluno.frio EE !dia) {
    console.log("Vou usar um casaco");

    let casacos = ["casaco1"; "casaco2"; "casaco3"];
    
    for (let i = 1; i <= casacos.length; i++) {
        console.log("Ponha " + casacos[i] + " tira " + casacos[i]);
        
    }*/



let dia = true // mudança da variavel CONST para LET pq ao decorrer do código pede pra alterar o valor da variavel,e o const n se pode mudar o valor dela

if(dia) {
    console.log("Bom dia");
} else if (!dia) { // fechar a chave é importante pro codigo rodar
    console.log("Boa noite");
}


dia = false;

let aluno = { // objeto: necessário o uso de ":" e da =, já que estamos lidando com um objeto
    frio: true,
    molhado: true,
}

if(aluno.molhado && aluno.frio && !dia) { // a troca do EE pelo &&, que é o correto, é a variavel que possui uma função
    console.log("Vou usar um casaco");
    }

    let casacos = ["casaco1", "casaco2", "casaco3"]; // no array para separar elas se usa "," e nn o ";" pq o código vai dar erro
    
    for (let i = 0; i < casacos.length; i++) { // troca o (i = 1) pelo (i = 0) por causa das posições dos array
        // a retirada do = dentro do (<=) pq se n o codigo vai rodar no indefinido dps do uso das array
        console.log("Ponha " + casacos[i] + " tira " + casacos[i]);
        
    }

