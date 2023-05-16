// P5JS preload
function preload() {
}
// user input
function mousePressed() {
  mode = (mode+1)%7;
  if(mode==0) {
    c1 = contrast(0);
  }
  if(mode==1) {
    c1 = contrast(1);
  }
  if(mode==2) {
    c3 = contrast(2);
  }
  if(mode==3) {
    c4 = contrast(3);
  }
  if(mode==4) {
    c4 = contrast(4);
  }
  if(mode==5) {
    c6 = contrast(5);
  }
  if(mode==6) {
    c6 = contrast(6);
  }
  display();
}

// constants
let mode = 0;
let c1 = [];
let c3 = [];
let c4 = [];
let c5 = [];
let c6 = [];
let c7 = [];

// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    rectMode(CENTER);
    colorMode(HSB, TWO_PI, 100, 100);

    c1 = contrast(0);
    c4 = contrast(3);
    c5 = contrast(4);
    c6 = contrast(5);
    c7 = contrast(6);
    display();
}
// P5JS draw
function draw() {
  switch (mode) {
    case 0:
      opart1(100, 10);
      break;
    case 2:
      opart3(10, mouseX);
      break;
    case 3:
      opart4(8);
      break;
    case 4:
      opart5(30);
      break;
    case 5:
      opart6(map(dist(mouseX, mouseY, 0.5*width, 0.5*height), 0, sqrt((width/2)*(width/2)+(height/2)*(height/2)), 0, 10));
      break;
    case 6:
      opart7(6, 1);
      break;
    default:
      //  
  }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    display();
}

function display() {
  switch (mode) {
    case 1:
      opart2(10);
      break;
    default:
      //  
  }
}



function contrast(c) {
  let col = [];
  switch (c) {
    //hue
    case 0:
      col = [color(random(TWO_PI), 100, 100), color(random(TWO_PI), 100, 100), color(random(TWO_PI), 100, 100), color(random(TWO_PI), 100, 100)];
      break;
    case 1:
      //saturation
      let h = random(TWO_PI);
      col = [color(h, 100, 100), color(h, 20, 80)];
      break;
    case 2:
      //light and dark
      col = [color(random(TWO_PI), 30, 100), color(random(TWO_PI), 30, 10)];
      break;
    case 3:
      // warm and cool
      let h1 = random(1.5*PI, 2.5*PI)%TWO_PI;
      let h2 = random(0.5*PI, 1.5*PI);
      col = [color(h1, 100, 100), color(h2, 100, 100)];
      break;
    case 4:
      // complementary contrast
      let hh1 = random(TWO_PI);
      let hh2 = (hh1 + PI)%TWO_PI;
      col = [color(hh1, 100, 100), color(hh2, 100, 100)];
      break;
    case 5:
      //simultaneous contrast
      col = [color(random(TWO_PI), 100, 100), color(0, 0, 60)];
      break;
    case 6:
      //contrast of extension
      let h7 = random(TWO_PI);
      col = [color(random(TWO_PI), 100, 100), color(h7, 40, 100), color(h7, 100, 100), color(h7, 100, 60), color(h7, 100, 30)];
      break;
    default:
      //  
  }
  return col;
}

