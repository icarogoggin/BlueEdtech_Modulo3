const input = document.getElementById('input')
const indicator = document.getElementById('indicator')
const text = document.getElementById('text')

function checar() {
    const senha = input.value
    const forca = {
      tamPontos: 0,
      caracPontos: 0,
      capsPontoss: 0
    }
    if (senha.length < 4) {
      forca.tamPontos = 0;
    } else if (senha.length > 12) {
      forca.tamPontos = 1;
    } else {
      forca.tamPontos = input.value.length / 20;
    }
    
    if (senha.match(/\d/g)) {
      forca.caracPontos += 0.3;
    }
    if (senha.match(/[a-zA-Z]/g)) {
      forca.caracPontos += 0.35;
    }
    if (senha.match(/[\W_]/g)) {
      forca.caracPontos += 0.4;
    }
    
    if (senha.match(/[a-z]/g)) {
      forca.capsPontoss += 0.5;
    }
    if (senha.match(/[A-Z]/g)) {
      forca.capsPontoss += 0.5;
    }
    
    const scores = Math.round(
      forca.tamPontos +
      forca.caracPontos +
      forca.capsPontoss
    )
    defForca(scores);
  }
  
function defForca(nivel) {
  switch (nivel) {
    case 0:
       nivel = 'Fraca';
      break;
    case 1:
      nivel = 'Normal';
      break;
    case 2:
      nivel = 'Boa';
      break;
    case 3:
      nivel = 'Muito Boa';
      break;
    default:
      nivel = 'Fraca';
  }
  text.innerText = nivel;
  indicator.className = `pass__label pass__label--${nivel}`
}