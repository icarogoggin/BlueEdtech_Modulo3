
function converter(){
    var celsius =  document.getElementById('input').value;
    celsius = parseFloat(celsius);
    var f = celsius * 1.8 + 32;

    document.getElementById("resultado").innerHTML = f;
}
