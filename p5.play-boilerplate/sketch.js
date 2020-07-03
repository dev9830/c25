var raindrops=[];
function setup(){
  createCanvas(1200,500);
  for(i=0;i<500;i++){
    raindrops[i]=new Drop();
  }
}
function draw(){
  background("red");
  for(i=0;i<500;i++){
  raindrops[i].fall();
  raindrops[i].display();
  }
}