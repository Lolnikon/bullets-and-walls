var car,car1,car2,swall;
var speed,weight;





function setup() {
  createCanvas(1600,1000);
 

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,100,50,50);
  car1=createSprite(50,300,50,50);
  car2=createSprite(50,500,50,50);
  wall=createSprite(1200,700,20,2000)
  wall.shapeColor=color(80,80,80) 
  car.velocityX=speed;
  car1.velocityX=speed;
  car2.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {

    car.velocityX=0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180){

      car.shapeColor=color(255, 0, 0);


    }

    if(deformation<180 && deformation>100){

      car.shapeColor=color(230, 230, 0);

    }

    if(deformation<100){


      car.shapeColor=color(0, 255, 0);

    }

      
      
      if(wall.x-car2.x < (car2.width+wall.width)/2)
      {
    
        car2.velocityX=0;
        var deformation = 0.5 * weight * speed* speed/22509;
        if(deformation>180){
    
          car2.shapeColor=color(255, 0, 0);
    
    
        }
    
        if(deformation<180 && deformation>100){
    
          car2.shapeColor=color(230, 230, 0);
    
        }
    
        if(deformation<100){
    
    
          car2.shapeColor=color(0, 255, 0);
    
        }
    












  }
  
  if(wall.x-car.x < (car1.width+wall.width)/2)
  {

    car1.velocityX=0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180){

      car1.shapeColor=color(255, 0, 0);


    }

    if(deformation<180 && deformation>100){

      car1.shapeColor=color(230, 230, 0);

    }

    if(deformation<100){


      car1.shapeColor=color(0, 255, 0);

    }
  }
  
  drawSprites();

}


  }


