
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];
   
function compareNotas (a,b){
    return a - b;
}

for (let i = 0; i < atletas.length; i++){
    let soma = 0;
    atletas[i].notasAtualizadas = atletas[i].notas;
    atletas[i].notasAtualizadas = atletas[i].notasAtualizadas.sort(compareNotas).slice(1, 4);
    atletas[i].notas.map(notas =>{
        return soma += notas;
    });
    console.log(`Atleta: ${atletas[i].nome}\nNotas Obtidas: ${atletas[i].notas}\nMédia Válida: ${soma / atletas[i].notas.length}`);
};