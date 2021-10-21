var sea,ship;
var seaImg,shipImg;
// Vou criar uma matriz, porquê não?
var matriz = [10,40,10,40];

function euseicriarmatrizes(){
  var divisao = matriz[0] / matriz[1];
  console.log (divisao);
}


function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}


function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,140,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.35;
  
}

function draw() {
  background(0);
  euseicriarmatrizes();

  //código para redefinir o fundo

  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}