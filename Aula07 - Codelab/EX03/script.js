function comparar(){
    var num1 = parseInt(document.getElementById("a").value);
    var num2 = parseInt(document.getElementById("b").value);
    
    var resultado = num1;
    if(num2 > resultado)
     resultado = num2

    if(num1 === num2)
     resultado = "São Iguais!";


    alert("Resultado: "+resultado);
  }
