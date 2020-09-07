const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
 var canvas = createCanvas(800,400);
  ground= new Ground(width/2);
}

for(var k = 0;k <=width;k = k + 80){
  divisions.push(new Divisions(k, height=divisionHeight/2, 10, divisionHeight));
}
for(var j = 40;j <=width; j = j + 50)
{
  plinkos.push(new plinkos(j,75,5))
}

function draw() {
  background(480,480);  
for (var i = 0;i < plinkos.length; i++){
  plinkos[i].display();
}

for (var i = 0;i < particles.length; i++){
  particles[i].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  
}
}