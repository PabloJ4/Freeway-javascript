// imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage("assets/img/estrada.png");
    imagemDoAtor = loadImage("assets/img/ator-1.png");
    imagemCarro = loadImage("assets/img/carro-1.png");
    imagemCarro2 = loadImage("assets/img/carro-2.png");
    imagemCarro3 = loadImage("assets/img/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

    somDaTrilha = loadSound("assets/sons/trilha.mp3");
    somDaColisao = loadSound("assets/sons/colidiu.mp3");
    somDoPonto = loadSound("assets/sons/pontos.wav");
}
