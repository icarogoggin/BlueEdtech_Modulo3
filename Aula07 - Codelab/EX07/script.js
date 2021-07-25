const elementoInput = document.getElementById('input');

function fReverter(){
    var str = elementoInput.value;
    var text = "";
    var len = str.length - 1;
  
    for(i = len; i > -1; i--){
        var res = str.charAt(i); 
        text += str[i];
      
    }
    document.getElementById("resultado").innerHTML = text;
    
}