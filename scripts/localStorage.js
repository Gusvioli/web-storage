function escutarBotao(elementoID, funcao) {
  const elemento = document.getElementById(elementoID);
  return elemento.addEventListener("click", funcao);
}

function carregaBg() {
  const pegarCor = localStorage.getItem("cor");
  const elementoBody = document.getElementById("bg");
  if (pegarCor) {
    elementoBody.className = pegarCor;
  }
}

function localBgRed() {
  localStorage.setItem("cor", "redBg");
}

function localBgYellow() {
  localStorage.setItem("cor", "yellowBg");
}

function localBgBlue() {
  localStorage.setItem("cor", "blueBg");
}

function localclear() {
  localStorage.clear();
}

function localremove() {
  localStorage.removeItem("cor");
}

window.onload = () => {
  carregaBg();
  escutarBotao("red-local", localBgRed);
  escutarBotao("yellow-local", localBgYellow);
  escutarBotao("blue-local", localBgBlue);
  escutarBotao("clear", localclear);
  escutarBotao("remove", localremove);

  localStorage.setItem("localStorage", JSON.stringify(true));
  // localStorage.setItem('localStorage', true);

  // localStorage.setItem('localStorage', 22);
  // localStorage.setItem('localStorage', JSON.stringify(22));

  // localStorage.setItem('localStorage', 'Turma 22');
  // localStorage.setItem('localStorage', JSON.stringify('Turma 22'));

  // localStorage.setItem('localStorage', JSON.stringify( {chave: 'valor'}));
  // localStorage.setItem('localStorage', {chave: 'valor'});

  // localStorage.setItem('localStorage', JSON.stringify(['valor1', 'valor2']));
  // localStorage.setItem('localStorage', ['valor1', 'valor2']);

  // const ver = localStorage.getItem('localStorage');

  // console.log(typeof ver);
  // console.log(typeof JSON.parse(ver));

  // const ver =  localStorage.key(0);
  // console.log(ver);
};
