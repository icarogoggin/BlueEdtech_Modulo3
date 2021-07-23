var arrayNotas = [
  ["Matemática",0,0,0,0,0],
  ["Português",0,0,0,0,0],
  ["Geografia",0,0,0,0,0],
  ["Biologia",0,0,0,0,0]
];

function atualizaResultado(linha, posicao, nota){
  if( nota > 10 || nota < 0){
    alert("Insira uma nota válida!");
  }else{
  arrayNotas[linha][posicao] = parseFloat(nota);
  var somaNotas = arrayNotas[linha][1]+arrayNotas[linha][2]+arrayNotas[linha][3]+arrayNotas[linha][4];
  arrayNotas[linha][5] = parseFloat(somaNotas)/4;
  document.getElementById("r"+linha).innerHTML = arrayNotas[linha][5];
  }
}