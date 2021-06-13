var canvas;
var music;
var Edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(90,590,180,20)
    surface2=createSprite(280,590,180,20)
    surface3=createSprite(470,590,180,20)
    surface4=createSprite(700,590,250,20)
    surface1.shapeColor="red"
    surface2.shapeColor="blue"
    surface3.shapeColor="green"
    surface4.shapeColor="yellow"



    //create box sprite and give velocity
    box=createSprite(random(800,20),200,20,20)
    box.velocityX=6
    box.velocityY=7
    box.shapeColor="black"

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   createEdgeSprites()
   //miss can u please tell me how to make the box bounceoff the edges
 
  
    


    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.bounceOff(surface1)
        box.shapeColor="red"
    }
    if(box.isTouching(surface2)){
        box.bounceOff(surface2)
        box.shapeColor="blue"
    }
    if(box.isTouching(surface3)){
        box.bounceOff(surface3)
        box.shapeColor="green"
    }
    if(box.isTouching(surface4)){
        box.bounceOff(surface4)
        box.shapeColor="yellow"
    }
    drawSprites()
}
