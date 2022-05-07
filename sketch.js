let grass;
let flower;
var flowerImg;
let score = 0;
let c1, c2;

function preload() {
    grass = loadImage('book.jpg');
    flowerImg = loadImage('pages.gif');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  //extraCanvas = createGraphics(windowWidth, windowHeight);
  
  flower = new Group();
  //apple function hopefully
  for (let i = 0; i < 10; i++) {
  
    flower = createSprite(
      random(100, windowWidth - 100),
      random(100, windowHeight - 100),
      -50,
      -50
    );
    flower.addImage(flowerImg);
    flower.onMouseOver = removeAndScore;
  }
}

function draw() {
  background(0);
  image(grass, 0, 0, 0);
  drawSprites();

  fill(255)
  textSize(72);
  textAlign(CENTER, CENTER);
  if (score < 10) {
    text(score, width / 2, height / 2);
  } else {
    text("you win!", width / 2, height / 2);
  }

}

function removeAndScore() {
  score += 1;
  this.remove();
}



