
window.onload = reset;
const player1 = 'o';
const player2 = 'x';
const vazio = '';
let ganhou = false;

let jogador = player1;
let tabuleiro =
  [vazio, vazio, vazio,
    vazio, vazio, vazio,
    vazio, vazio, vazio];

let xWins = 0;
let oWins = 0;
let draws = 0;
let partidas = 0;

function reset() {
  jogador = player1;
  ganhou = false;
  for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`celula_${i}`);
    cell.innerHTML = '';
    tabuleiro[i] = vazio
  }

  if (jogador === player1) {
    document.getElementById("player1").style.opacity = 1;
    document.getElementById("player2").style.opacity = 0.25;
  } else {
    document.getElementById("player1").style.opacity = 0.25;
    document.getElementById("player2").style.opacity = 1;
  }
}

function mensagemGanhou() {
  alert('ganhou: ' + jogador);
  ganhou = true;
  if (jogador === player2) {
    xWins += 1;
    document.getElementById("xWins").innerHTML = xWins;
  } else {
    oWins += 1;
    document.getElementById("oWins").innerHTML = oWins;
  }
  partidas += 1;
  document.getElementById("rodada").innerHTML = partidas + " RODADAS";
}

function empate() {
  alert("empatou");
  draws += 1;
  document.getElementById("draws").innerHTML = draws;
  partidas += 1;
  document.getElementById("rodada").innerHTML = partidas + " RODADAS";
}

function verificaGanhador() {
  //testar a primeira linha
  if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[1] && tabuleiro[0] === tabuleiro[2]) {
    mensagemGanhou();
    return;
  }

  //testar a segunda linha
  if (tabuleiro[3] !== vazio &&
    tabuleiro[3] === tabuleiro[4] && tabuleiro[3] === tabuleiro[5]) {
    mensagemGanhou();
    return;
  }

  //testar a terceira linha
  if (tabuleiro[6] !== vazio &&
    tabuleiro[6] === tabuleiro[7] && tabuleiro[6] === tabuleiro[8]) {
    mensagemGanhou();
    return;
  }

  //testar a primeira coluna
  if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[3] && tabuleiro[0] === tabuleiro[6]) {
    mensagemGanhou();
    return;
  }

  //testar a segunda coluna
  if (tabuleiro[1] !== vazio &&
    tabuleiro[1] === tabuleiro[4] && tabuleiro[1] === tabuleiro[7]) {
    mensagemGanhou();
    return;
  }

  //testar a terceira coluna
  if (tabuleiro[2] !== vazio &&
    tabuleiro[2] === tabuleiro[5] && tabuleiro[2] === tabuleiro[8]) {
    mensagemGanhou();
    return;
  }

  //testar a primeira diagonal
  if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8]) {
    mensagemGanhou();
    return;
  }

  //testar a segunda diagonal
  if (tabuleiro[2] !== vazio &&
    tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6]) {
    mensagemGanhou();
    return;
  }

  for (let i = 0; i < tabuleiro.length; i++) {
    if (tabuleiro[i] === vazio) return;
  }
  empate();
}

function jogada(numero) {
  if (ganhou === true) {
    alert("O Jogo acabou: ");
    return;
  }

  let cell = document.getElementById(`celula_${numero}`);

  if (tabuleiro[numero] === vazio) {
    cell.innerHTML = `<img src="${jogador}.svg" alt='jogador ${jogador}' />`;
    tabuleiro[numero] = jogador;

    verificaGanhador();
    // troca de jogador
    jogador = (jogador === player1) ? player2 : player1;

    if (jogador === player1) {
      document.getElementById("player1").style.opacity = 1;
      document.getElementById("player2").style.opacity = 0.25;
    } else {
      document.getElementById("player1").style.opacity = 0.25;
      document.getElementById("player2").style.opacity = 1;
    }
  }
}







