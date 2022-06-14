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

  // sessionStorage.setItem('sessionStorage', JSON.stringify(true));

  // sessionStorage.setItem('sessionStorage', JSON.stringify(22));

  // sessionStorage.setItem('sessionStorage', JSON.stringify('Turma 22'));

  // sessionStorage.setItem('sessionStorage', JSON.stringify( {chave: 'valor'}));

  // sessionStorage.setItem('sessionStorage', JSON.stringify([22, 'String', {chave: "valor"}, true]));

  // const ver = sessionStorage.getItem('sessionStorage');

  // Retorna o tipo de dados armazenado no navegador
  // console.log(typeof ver);

  // Retorna o valor já convertido para o valor original
  // console.log(JSON.parse(ver));

  // Retorna o tipo do valor convertido
  // console.log(typeof JSON.parse(ver));
  
  // const ver =  sessionStorage.key(0);
  // console.log(ver);
  
}