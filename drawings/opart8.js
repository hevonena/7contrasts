function opart7(n, m) {
    let tiles = checker7(n, m, map(mouseX, 0, width, 0, 1), map(mouseY, 0, height, 0, 1), 0.3);
    image(tiles, 0, 0, width, height);
}

function checker7(n, s, interX, interY, s2) {
    let checker = createGraphics(width, height);
    checker.noStroke();
  
    let w = width / (2 * n);
    let h = s*w;
    let nj = height / h;
    let stepx = interX*(w-s2*w);
    let stepy = interY*(h-s2*h);
  
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nj; j++) {

            for (let k = 2; k < 4; k++) {
                checker.push();

                let b1 = createVector(0,0);
                let b2 = createVector(0,0);
                let b3 = createVector(0,0);
                let b4 = createVector(0,0);
                let d1 = createVector(0,0);
                let d2 = createVector(0,0);
                let d3 = createVector(0,0);
                let d4 = createVector(0,0);
                
    
                if(k==0) {
                    checker.translate(0.5*width, 0.5*height);
                    b1 = createVector(0 - i*w - w, 0 - j*h- h);
                    b2 = createVector(0 - i*w , 0 - j*h- h);
                    b3 = createVector(0 - i*w, 0 - j*h);
                    b4 = createVector(0 - i*w - w, 0 - j*h);
                    d1 = createVector(stepx - i*w - w,  stepy - j*h- h);
                    d2 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h);
                    d3 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h + s2*h);
                    d4 = createVector(stepx - i*w - w,  stepy - j*h- h + s2*h);
                } 
                if(k==1) {
                    checker.translate(width, 0.5*height);
                    b1 = createVector(0 - i*w - w, 0 - j*h- h);
                    b2 = createVector(0 - i*w , 0 - j*h- h);
                    b3 = createVector(0 - i*w, 0 - j*h);
                    b4 = createVector(0 - i*w - w, 0 - j*h);
                    d1 = createVector(stepx - i*w - w,  stepy - j*h- h);
                    d2 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h);
                    d3 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h + s2*h);
                    d4 = createVector(stepx - i*w - w,  stepy - j*h- h + s2*h);
                } 
                if(k==2) {
                    checker.translate(0.5*width, height);
                    b1 = createVector(0 - i*w - w, 0 - j*h- h);
                    b2 = createVector(0 - i*w , 0 - j*h- h);
                    b3 = createVector(0 - i*w, 0 - j*h);
                    b4 = createVector(0 - i*w - w, 0 - j*h);
                    d1 = createVector(stepx - i*w - w,  stepy - j*h- h);
                    d2 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h);
                    d3 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h + s2*h);
                    d4 = createVector(stepx - i*w - w,  stepy - j*h- h + s2*h);
                } 
                if(k==3) {
                    checker.translate(width, height);
                    b1 = createVector(0 - i*w - w, 0 - j*h- h);
                    b2 = createVector(0 - i*w , 0 - j*h- h);
                    b3 = createVector(0 - i*w, 0 - j*h);
                    b4 = createVector(0 - i*w - w, 0 - j*h);
                    d1 = createVector(stepx - i*w - w,  stepy - j*h- h);
                    d2 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h);
                    d3 = createVector(stepx - i*w - w + s2*w,  stepy - j*h- h + s2*h);
                    d4 = createVector(stepx - i*w - w,  stepy - j*h- h + s2*h);
                } 

                
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
        
                checker.pop();
            }
        }
    }
  
    return checker;
}