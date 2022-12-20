let CANVAS_SIZE = 600
let GRID_SQUARES = 10;
let STEP = CANVAS_SIZE/GRID_SQUARES;
let c1;



var colorpallet1 = [[255, 237, 225],[249, 251, 242],[215, 249, 255],[175, 203, 255],[14, 28, 54] ]
var colorpallet2 = [[250, 162, 117],[255, 140, 97],[206, 106, 133],[152, 82, 119],[92, 55, 76]]
var colorpallet3 = [[114, 158, 161],[181, 189, 137],[223, 190, 153],[236, 145, 146],[219, 83, 117]]
var colorpallet4 = [[0, 42, 50],[196, 162, 158],[235, 166, 169],[255, 198, 172],[244, 0, 118]]
var colorpallet5 = [[234, 200, 202],[242, 213, 248],[230, 192, 233],[191, 171, 203],[141, 137, 166]]




function setupStandardAxes(showLines){
  push()
  translate(CANVAS_SIZE/2,CANVAS_SIZE/2)
  scale(1.0,-1.0)
  
  
}


function drawGridLines(){
  
  fill(0,0,255)
  circle(0,0,5)
  stroke(200)
  for(var i = -GRID_SQUARES;i<GRID_SQUARES;i++){
    
      line(i*STEP,-GRID_SQUARES/2*STEP,i*STEP,GRID_SQUARES/2*STEP)
      
  }
  for(var j = -GRID_SQUARES;j<GRID_SQUARES;j++){
    
      line(-GRID_SQUARES/2*STEP,j*STEP,GRID_SQUARES/2*STEP,j*STEP)
      
  }
}

function gradient_sky(x, y, w, h, c1, c2){
  noFill()
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1)
      let c = lerpColor(c1, c2, inter)
      stroke(c)
      line(x, i, x + w, i)
    }
  }


function random_pallet(){
  var full_pallet = [colorpallet1,colorpallet2,colorpallet3,colorpallet4,colorpallet5]
  var random_color_pallet = random(full_pallet)
  return random_pallet_color = random_color_pallet 
}


function random_color_from_pallet(x){
  var random_color = random(x)
    return colorpallet = random_color
}


function cloud_setup(){
  let ycloud = 0
  for(let x = width/5 - 500; x < width/5 + 500; x++){
    let xcloud = 0
    for(let y = 100; y < height - 200; y += 2){
      let angle = noise(xcloud,ycloud)*TAU
      let v = p5.Vector.fromAngle(angle)
      let n = noise(xcloud,ycloud)*300
      push()
      translate(x,y);
      rotate(v.heading())
      strokeWeight(angle/3)
      stroke(n*2, n/10)
      line(0,0,20,0)
      pop()
      xcloud += 0.1
    }
    ycloud += 0.01
  }
}



function sun_setup(){
  noStroke()
  fill(c1)
  let randomcx = random(-5,5)
  let randomcy = random(0,5)
  let randomcd = random(1,5)
  circle(randomcx*STEP,randomcy*STEP,randomcd*STEP)
}



function background_ground_setup(){
  noStroke()
  random_pallet()
  random_color_from_pallet(random_pallet_color)
  background_ground_color = colorpallet
  fill(background_ground_color)
  rect(-5*STEP,-5*STEP,10*STEP,5*STEP)
  
  
  noStroke()
  random_pallet()
  random_color_from_pallet(random_pallet_color)
  groundcolor = colorpallet
  c1 = color(groundcolor)
  random_color_from_pallet(random_pallet_color)
  random_pallet()
  let groundcolor2 = colorpallet
  getRGB(groundcolor2)
  makeLighterColor(r,g,b)
  c2 = color(r,g,b)
  gradient_sky(-5*STEP,-5*STEP,10*STEP,5*STEP,c1,c2)
  

}



function makeLighterColor(r,g,b){
  r = r*0.5
  g = g*0.5
  b = b*0.5
  return r
  return g
  return b
}

function makeDarkerColor(r,g,b){
  r = r
  g = g
  b = b
  return r
  return g
  return b
}

function getRGB(color){
  let RGBvalue = (color)
  r = RGBvalue.slice(0,1)
  g = RGBvalue.slice(1,2)
  b = RGBvalue.slice(2,3)
  return r
  return g
  return b
}




function sky_setup(){
  noStroke()
  
  random_pallet()
  random_color_from_pallet(random_pallet_color)
  skycolor = colorpallet
  fill(skycolor)

  c1 = color(skycolor)
  random_color_from_pallet(random_pallet_color)
  random_pallet()
  let skycolor2 = colorpallet
  c2 = color(skycolor2)
  
  gradient_sky(-5*STEP,0,10*STEP,5*STEP,c1,c2)
  
}




function random_sun(){
  let random_number = [1,2]
  let g = random(random_number)
  if (g == 1) {
    sun_setup()
  }
}

  
function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(220)
  setupStandardAxes();
  sky_setup()
  random_sun()
  random_mountain()
  cloud_setup()
  background_ground_setup()
  ground_detail_left()
  ground_detail_right()
  //drawGridLines()

  
  


}

let maxmountain = 8

x1 = 10/maxmountain/3
x2 = 10/maxmountain


function random_mountain(){
  noStroke()
  
  random_pallet()
  random_color_from_pallet(random_pallet_color)
  mountaincolor = colorpallet
  mountaincolor_fill = color(mountaincolor)
  mountaincolor_fill.setAlpha(250)

  
  fill(mountaincolor_fill)

  
  beginShape()

  curveVertex(-6*STEP,0)
  curveVertex(-6*STEP,0)
  for(let j = 0; j <= maxmountain; j++){
    for(let i = 1 ; i <=4; i++){
      console.log(x1,x2)
      x = random(x1,x2)
      y = random(1,5)
      curveVertex(-5*STEP+x*STEP,y*STEP)
      console.log(x,y)
      x1=x+10/maxmountain
      x2=x+10/maxmountain/3
    }
    }
  curveVertex(5*STEP,0)
  curveVertex(5*STEP,0)
  endShape()
  
}

let maxgroundl = 5
y1l = -6/maxgroundl/5
y2l = -6/maxgroundl

function ground_detail_left(){
  noStroke()
  
  random_pallet()
  random_color_from_pallet(random_pallet_color)
  groundcolor = colorpallet
  
  
  
  fill(groundcolor)
  beginShape()
  let starty_l = random(0,0.5)
  curveVertex(-5*STEP,starty_l*STEP)
  curveVertex(-5*STEP,starty_l*STEP)
  
  let randomstart = random(-3.5,-1)
  curveVertex(randomstart*STEP,starty_l*STEP)
  
  

  for(let g = 0; g <= maxgroundl; g++){
    for(let p = 1 ; p <=4; p++){

      x = random(-3.5,-0.5)
      y = random(y1l,y2l)
      curveVertex(x*STEP,y*STEP)
      console.log(x,y)
      y1l=y-6/maxgroundl
      y2l=y-6/maxgroundl/3
    }
  }
  curveVertex(-6*STEP,-5*STEP)
  curveVertex(-6*STEP,-5*STEP)
  
  endShape()
}


maxgroundr = 8
y1r = -6/maxgroundr/5
y2r = -6/maxgroundr

function ground_detail_right(){
  noStroke()
  fill(groundcolor)
  beginShape()
  let starty_r = random(0,0.5)
  curveVertex(5*STEP,0)
  curveVertex(5*STEP,0)
  
  for(let l = 0; l <= maxgroundr; l++){
    for(let u = 1 ; u <=4; u++){
      
      x = random(3,4.5)
      y = random(y1r,y2r)
      curveVertex(x*STEP,y*STEP)
      
      y1r=y-6/maxgroundr
      y2r=y-6/maxgroundr/3
    }
  }
  curveVertex(5*STEP,-5*STEP)
  curveVertex(5*STEP,-5*STEP)
  
  
  endShape()
}




function draw() {
  setupStandardAxes();

  noLoop();
}
