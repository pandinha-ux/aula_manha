var parentes = "";

console.log("Oi Sr, bom dia, iremos fazer algumas perguntas para dar continuidade no nosso cadastro. Possui parentes na região? (sim ou não)");
process.stdin.on("data", function(data){
    parentes = data.toString().trim();
    if (parentes == "sim"|| parentes =="s") {
        console.log("Muito bom ter parentes por perto. \n");

    } else {
        
    process.exit();
    }
  
    });