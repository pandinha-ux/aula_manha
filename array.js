let listadecompras = ["frutas","verduras","legumes"]

console.log("Confira sua lista");
process.stdin.on("data", function(data){
     
     if (listadecompras.includes(data.toString().trim())){
        console.log("item encontrado");
     } else {
        console.log("Intem n encontrado")
     }


});
