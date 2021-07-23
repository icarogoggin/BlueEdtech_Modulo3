const elementoItem = document.getElementById("item");


function adicionar() {
    var div = document.createElement('li');
    div.innerHTML = `<div id="${elementoItem.value}"> Comprar: ${elementoItem.value} 
    <button id="excluir" onclick="apagar()">Excluir</button></div>`;
    document.getElementById('lista').append(div);

}

function resetar() {
    document.getElementById('lista').innerHTML = ''
  }

function apagar() {
    document.getElementById(`${elementoItem.value}`).innerHTML = ''
  }