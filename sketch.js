//Create variables here
var dog,dogImage,happyDog,happyDogImage, dataBase, foodS, foodStock,readStock;
 

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  happyDogImage=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImage)
  dog.scale=0.2
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)

}


function draw() {  
background(46, 139, 87)
drawSprites();
  //add styles here
  textSize(15)
  fill('black')
  text("food remaining "+foodS,90,100)

  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage)
  
  
}
text("Note:Press Up arrow key to feed dog milk",130,10)



}



function readStock(data){
  foodS=data.val()
}

function writeStock(x){
if(x<=0){

  x=0
}
else{
  x=x-1

}
database.ref('/').update({
  Food:x
})
}

