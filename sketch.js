

function preload(){
 bg = loadImage("iss.png");
 sleep = loadAnimation("sleep.png")
 brush = loadAnimation("brush.png");
 gym = loadAnimation("gym21.png","gym22.png");
 eat = loadAnimation("eat1.png","eat2.png");
 drink = loadAnimation("drink1.png","drink2.png");
 move = loadAnimation("move.png","move1.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg); 
  drawSprites();

instruction:
UpArrow = Brushing
DownArrow = Gymming
LeftArrow = Bathing
mkey = Moving

createEdgeSprite();
rect(astronaut.position.x,astronaut.position.y,400,20);
}


if (keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gamming",gym);
  astronaut.changeAnimation("gamming");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("bathibg",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}


