var pedra = document.querySelector("#pedra1");
var papel = document.querySelector("#papel1");
var tesoura = document.querySelector("#tesoura1");
var controleImg = 0;
var imgAleatoria = 0;

pedra.addEventListener("click", escolheuPedra);
papel.addEventListener("click", escolheuPapel);
tesoura.addEventListener("click", escolheuTesoura);

function preload(){
  imgPedra = loadImage("imagens/pedra.png");
  imgPapel = loadImage("imagens/papel.png");
  imgTesoura = loadImage("imagens/tesoura.png");
  imgInicial = loadImage("imagens/gif.gif");
}

function escolheuPedra(){
  controleImg = 1;
  imgAleatoria = floor(random(1,4))
  //console.log(imgAleatoria);
  return controleImg;
}

function escolheuPapel(){
  controleImg = 2;
  imgAleatoria = floor(random(1,4))
  return controleImg;
}

function escolheuTesoura(){
  controleImg = 3;
  imgAleatoria = floor(random(1,4))
  return controleImg;
}

function mostrar(){
  if(controleImg == 0){
    image(imgInicial, 100, 100, 110, 110);
  }
  if(controleImg == 1){
    image(imgPedra, 100, 100, 110, 110);
  }
  if(controleImg == 2){
    image(imgPapel, 100, 100, 110, 110);
  }
  if(controleImg == 3){
    image(imgTesoura, 100, 100, 90, 90);
  }
}

function escolhaOponente(){
  if(imgAleatoria == 0){
    image(imgInicial, 250, 100, 110, 110);
  }
  if(imgAleatoria == 1){
    image(imgPedra, 250, 100, 110, 110);
  }
  if(imgAleatoria == 2){
    image(imgPapel, 250, 100, 110, 110);
  }
  if(imgAleatoria == 3){
    image(imgTesoura, 250, 100, 90, 90);
  }
}

function verificar(){
  if(controleImg == 0 && imgAleatoria == 0){
    textSize(20);
    fill("#5d4128");
    text("Aguardando Jogador", 100, 350);
  }
  if(controleImg == imgAleatoria && controleImg !== 0){
    fill("#5d4128");
    text("Empate!", 100, 350);
  }


  if(controleImg == 1 && imgAleatoria == 2){
    fill("#5d4128");
    text("Computador Ganhou, papel envolve pedra!", 10, 350);
  }
  if(controleImg == 2 && imgAleatoria == 3){
    fill("#5d4128");
    text("Computador Ganhou, tesoura corta papel!", 10, 350)
  }
  if(controleImg == 3 && imgAleatoria == 1){
    fill("#5d4128");
    text("Computador Ganhou, pedra quebra tesoura!", 10, 350);
  }
  

  if(controleImg == 2 && imgAleatoria == 1){
    fill("#5d4128");
    text("Você Ganhou, papel envolve pedra!", 30, 350);
  }
  if(controleImg == 3 && imgAleatoria == 2){
    fill("#5d4128");
    text("Você Ganhou, tesoura corta papel!", 30, 350)
  }
  if(controleImg == 1 && imgAleatoria == 3){
    fill("#5d4128");
    text("Você Ganhou, pedra quebra tesoura!", 30, 350);
  }
}

function desenharBorda(){
  stroke("#7b7138");
  rect(95, 90, 110, 110);
  rect(250, 90, 110, 110);
  noFill();
}

function setup(){
  createCanvas(420, 400);
}

function draw(){
  background("#ffdd00");
  desenharBorda();
  mostrar();
  escolhaOponente();
  verificar();
}
