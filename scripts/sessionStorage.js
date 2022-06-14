function escutarBotao (elementoID, funcao) {
  const elemento = document.getElementById(elementoID);
  return elemento.addEventListener('click', funcao);
};

function carregaBg (event) {
  const pegarCor = sessionStorage.getItem('cor');
  const elementoBody = document.getElementById('bg');
  if (pegarCor){
    elementoBody.className = pegarCor;
  }
}

function sessionBgRed () {
  sessionStorage.setItem('cor', 'redBg');
};

function  sessionBgYellow () {
  sessionStorage.setItem('cor', 'yellowBg');
};

function  sessionBgBlue () {
  sessionStorage.setItem('cor', 'blueBg');
};

function  sessionclear () {
  sessionStorage.clear();
};

function  sessionremove () {
  sessionStorage.removeItem('cor');
};


window.onload = () => {
  
  carregaBg();
  escutarBotao('red-session', sessionBgRed);
  escutarBotao('yellow-session', sessionBgYellow);
  escutarBotao('blue-session', sessionBgBlue);
  escutarBotao('clear', sessionclear);
  escutarBotao('remove', sessionremove);

  sessionStorage.setItem('sessionStorage', JSON.stringify(true));
  // sessionStorage.setItem('sessionStorage', true);

  // sessionStorage.setItem('sessionStorage', 22);
  // sessionStorage.setItem('sessionStorage', JSON.stringify(22));

  // sessionStorage.setItem('sessionStorage', 'Turma 22');
  // sessionStorage.setItem('sessionStorage', JSON.stringify('Turma 22'));

  // sessionStorage.setItem('sessionStorage', JSON.stringify( {chave: 'valor'}));
  // sessionStorage.setItem('sessionStorage', {chave: 'valor'});

  // sessionStorage.setItem('sessionStorage', JSON.stringify(['valor1', 'valor2']));
  // sessionStorage.setItem('sessionStorage', ['valor1', 'valor2']);

  // const ver = sessionStorage.getItem('sessionStorage');

  // console.log(typeof JSON.parse(ver));
  
   const ver =  sessionStorage.key(0);
  console.log(ver);
  
}