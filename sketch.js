var bg;
var player1;
var player_img1,player_img2;
var virus;
var virusGroup = new Group();
var virus_img;
var bullets;
var bulletsGroup = new Group();
var bullet_img;
var gameState = "play"

function preload(){
  bg = loadImage("n1170555.jpg");
  player_img1 = loadImage("gunMan.png");
  virus_img = loadImage("corona.png");
  bullet_img = loadImage("images.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player = createSprite(displayWidth-800,displayHeight-370,50,50);
  player.addImage(player_img1);
  player.scale = 1.0;
  bullet = createSprite(displayWidth-700,displayHeight-390,15,20);
  bullet.addImage(bullet_img);
  bullet.scale = 0.8;
}

function draw() {

  background(bg); 

  if(keyDown(RIGHT_ARROW)){
  player.velocity.x = 2;
  } 
  if(keyDown(LEFT_ARROW)){
  player.velocity.x = -1;
  }
 if(bulletsGroup.isTouching(virusGroup)){
  virusGroup.visible = false
 }
  spawnVirus();
  if(keyDown("space")){
    spawnBullets();
  }
  spawnBullets();

  drawSprites();
}


function move(x,y){
player.x = player.x+x;
player.y = player.y+y;
}
function spawnVirus(){
if(World.frameCount % 200 === 0){
virus = createSprite(displayWidth-300,Math.round(random(displayHeight-500,displayHeight)),30,30);
virus.addImage("virus",virus_img);
virus.velocityX = -1;
virus.scale = 0.8;
virusGroup.add(virus);
}
}
function spawnBullets(){
  if(World.frameCount % 300 === 0){
  bullets = createSprite(displayWidth-400,displayHeight-900,5,10);
  bullets.velocityX = -2;
  bullets.addImage("bullets",bullet_img);
  bulletsGroup.add(bullets);
}
function isTouching(){
  if(virus.x - bullet.x < virus.width/2-bullet.width/2
    && bullet.x - virus.x < bullet.width/2-virus.width/2
    &&virus.y-bullet.y < virus.height/2-bullet.height/2
    && bullet.y-virus.y < bullet.height/2-virus.height/2){
  }
}
}
