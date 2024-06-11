/*  EXEMPLO 1*/
for (let i = 0; i <= 1000; i++); 
let controle = 10
for ( controle; controle < 1020; controle  += 20){
    console.log(i)
} 

/*exemplo 2 */
let cores = ["Vermelho", "Verde", "Azul"];

for (let i = 1; i <= cores.length; i++) {
    console.log(Cores[i]);
} 

/* ATIVIDADE 1.1*/

for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  } 

 /* ATIVIDADE 1.2*/

  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  } 


  /* ATIVIDADE 2.1*/
    let listadehobbie = []

    console.log("Digite seus Hobbies");
    process.stdin.on("data", function(data){
        listadehobbie.push(data.toString().trim());
        console.log(listadehobbie);
    }); 

    /*ATIVIDADE 2.2*/

let listaescolar = []

console.log("Digite os materias escolares");
process.stdin.on("data", function(data){
    listaescolar.push(data.toString().trim());
    console.log(listaescolar);
});
