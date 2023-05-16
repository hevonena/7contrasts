function opart7(n, m) {
    let tiles = checker7(n, m, map(mouseX, 0, width, 0, 1), map(mouseY, 0, height, 0, 1), 0.1);
    image(tiles, 0, 0, width, height);
}

function checker7(n, s, interX, interY, s2) {
    let checker = createGraphics(width, height);
    checker.noStroke();
  
    let w = width;
    let h = height;

    let stepx = map(interX, 0, 1, 0, width-s2*height);
    
    let stepy = map(interY, 0, 1, 0, height-s2*height);
  

    let b1 = createVector(0,0);
    let b2 = createVector(w,0);
    let b3 = createVector(w,h);
    let b4 = createVector(0,h);
    let d1 = createVector(stepx, stepy);
    let d2 = createVector(stepx+height*s2,stepy);
    let d3 = createVector(stepx+height*s2,stepy+height*s2);
    let d4 = createVector(stepx,stepy+height*s2);

                
    checker.fill(c7[0]);
    checker.rect(d1.x, d1.y, s2*w, s2*h);

    checker.fill(c7[1]);
    checker.beginShape();
    checker.vertex(b1.x, b1.y);
    checker.vertex(b2.x, b2.y);
    checker.vertex(d2.x, d2.y);
    checker.vertex(d1.x, d1.y);
    checker.endShape(CLOSE);

    checker.fill(c7[2]);
    checker.beginShape();
    checker.vertex(b2.x, b2.y);
    checker.vertex(b3.x, b3.y);
    checker.vertex(d3.x, d3.y);
    checker.vertex(d2.x, d2.y);
    checker.endShape(CLOSE);

    checker.fill(c7[3]);
    checker.beginShape();
    checker.vertex(b3.x, b3.y);
    checker.vertex(b4.x, b4.y);
    checker.vertex(d4.x, d4.y);
    checker.vertex(d3.x, d3.y);
    checker.endShape(CLOSE);

    checker.fill(c7[4]);
    checker.beginShape();
    checker.vertex(b4.x, b4.y);
    checker.vertex(b1.x, b1.y);
    checker.vertex(d1.x, d1.y);
    checker.vertex(d4.x, d4.y);
    checker.endShape(CLOSE);



  
    return checker;
}