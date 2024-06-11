let frutas = ["maça", "banana", "pessêgo","maça","banana"];
let cesta = {}

for (let i = 0; i < frutas.length ; i++){
    
    if(cesta[frutas[i]]){
        cesta[frutas[i]]++
    
    } else {
        cesta[frutas[i]] = 1
       
    }
}
console.log(cesta);
    




