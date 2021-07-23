const elementoNome = document.getElementById("nome");
const elementoIdade = document.getElementById("idade");
const elementoTelefone = document.getElementById("telefone");

function funcao() {
    var div = document.createElement('li')
    div.innerHTML = `Nome: ${elementoNome.value} Idade: ${elementoIdade.value} Telefone: ${elementoTelefone.value}`

    document.getElementById('lista').append(div);
}