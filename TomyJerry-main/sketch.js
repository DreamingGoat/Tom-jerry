
function preload() {
    //Carga aquí las imágenes
    gardenImg = loadImage("Imágenes/garden.png");
    tomOneImg = loadAnimation("Imágenes/tomOne.png");
    tomTwoImg = loadAnimation("Imágenes/tomTwo.png","Imágenes/tomThree.png");
    tomFourImg = loadAnimation("Imágenes/tomFour.png");
    jerryOneImg = loadAnimation("Imágenes/jerryOne.png");
    jerryTwoImg = loadAnimation("Imágenes/jerryTwo.png","Imágenes/jerryThree.png");
    jerryFourImg = loadAnimation("Imágenes/jerryFour.png");
}
function setup(){
   createCanvas(1000,800);
    //Crea aquí los sprites de Tom y Jerry
    jerry = createSprite(200,600,20,20);
    tom = createSprite(840,600,20,20);
    tom.addAnimation("lying",tomOneImg);
    jerry.addAnimation("gift",jerryOneImg);
    tom.scale=0.25;
    jerry.scale=0.15;
    tom.setCollider("circle",0,0,400);
    jerry.setCollider("circle",0,0,500);
}

function draw() {
    background (gardenImg);
    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
    if(keyDown("LEFT")){
    tom.x = tom.x-5; 
    tom.addAnimation("running",tomTwoImg);
    tom.changeAnimation("running");
    jerry.addAnimation("mocking",jerryTwoImg);
    jerry.changeAnimation("mocking");
    }
    if(keyDown("RIGHT")){
    tom.x = tom.x+5;
    
    tom.changeAnimation("running");
    }

    if(jerry.isTouching(tom)){
        tom.addAnimation("sitting",tomFourImg);
        tom.changeAnimation("sitting");
        jerry.addAnimation("searching",jerryFourImg);
        jerry.changeAnimation("searching");
        
    }
    
    drawSprites();


}