var gameState = 0;
var score = 0;
var font;
var run,run2
var runner1,runner2;
var player
var button,text,text1

function preload(){
font = loadFont("lailaland-font/Laillaland-BWG25.ttf");
runner1 = loadAnimation("Boyrun/run1.gif","Boyrun/run2.gif","Boyrun/run3.gif","Boyrun/run4.gif","Boyrun/run5.gif","Boyrun/run6.gif","Boyrun/run7.gif","Boyrun/run8.gif","Boyrun/run9.gif","Boyrun/run10.gif","Boyrun/run11.gif","Boyrun/run12.gif");
runner2 = loadAnimation("Girlrun/Grun1.gif","Girlrun/Grun2.gif","Girlrun/Grun3.gif","Girlrun/Grun4.gif","Girlrun/Grun5.gif","Girlrun/Grun6.gif","Girlrun/Grun7.gif","Girlrun/Grun8.gif","Girlrun/Grun9.gif","Girlrun/Grun10.gif","Girlrun/Grun11.gif","Girlrun/Grun12.gif","Girlrun/Grun13.gif","Girlrun/Grun14.gif","Girlrun/Grun15.gif")

}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  text = createElement("h2");
  text.html("Choose The Character You Want to Play As.")
  text.position(displayWidth/2-170,displayHeight/2-80);
  text1 = createElement("h2");
  text1.html("Press START to Start Playing");
  text1.position(displayWidth/2-170,displayHeight/2-80);
  button = createButton("START");
  

 player = createSprite(700,600,0.1,0.1);

run = createSprite(500,600,20,20);
  run.addAnimation("Animation 1",runner1);
  run.scale = 0.8;
  run.frameDelay = 2;

run2 = createSprite(900,600,20,20);
  run2.addAnimation("Animation 2",runner2);
run2.frameDelay = 2;
}

function draw() {
  background(0);
  textSize(28);
  fill("Red");
  textFont(font);
  //text("Choose The Character You Want to Play As.",displayWidth/2-170,displayHeight/2-80);

  if(mousePressedOver(run)){
    player.addAnimation("Animation 1",runner1);
    player.frameDelay = 2;
    player.scale = 0.8;
    run.remove();
    run2.remove();
    text.hide();
    button.position(675,800);
  }
  else if(mousePressedOver(run2)){
    player.addAnimation("Animation 2", runner2);
    player.frameDelay = 1;
    run.remove();
    run2.remove();
    text.hide();
    button.position(675,800);
  }
  //if(mousePressedOver(button)){
    //player.position(300,300,0.1,0.1)
  //}
  drawSprites();
}