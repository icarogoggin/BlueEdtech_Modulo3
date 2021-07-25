const login = document.getElementById('login');
const senha = document.getElementById('senha');

function entrar() {
    if( login.value != "icaro" || senha.value != "123"){
        alert("O login ou a senha estão errados!");
    }else{
        alert("Você entrou!");
    }

}