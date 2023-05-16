function opart6(n) {
    let triangles = tria(n);
    background(c6[1]);
    image(triangles, 0, 0, width, height);
  }

function tria(n) {
let t = createGraphics(width, height);
t.noStroke();
let w = width / (2*n);
let h = height / (2*n);
let s = 0.95;

for (let i = 0; i < width; i = i + w) {
    if(i <= 0.5 * width){ 
        w = sin(map(i, 0, width*0.5, 0.5*PI, s*PI))*width / (2 * n);
    } else {
        w = sin(map(i, width*0.5, width, s*PI, 0.5*PI))*width / (2 * n);
    }

    for (let j = 0; j < height; j = j + h) {
    if(j <= 0.5 * height){ 
        h = sin(map(j, 0, height*0.5, 0.5*PI, s*PI))*height / (2 * n);
    } else {
        h = sin(map(j, height*0.5, height, s*PI, 0.5*PI))*height / (2 * n);
    }
    let p1 = createVector(0,0);
    let p2 = createVector(0,0);
    let p3 = createVector(0,0);

    if (i <= 0.5*width && j <= 0.5*height) {
        p1.set(i, j);
        p2.set(i+w, j+h);
        p3.set(i, j+h);
    }
    if (i > 0.5*width && j <= 0.5*height) {
        p1.set(i+w, j);
        p2.set(i+w, j+h);
        p3.set(i, j+h);
    }
    if (i <= 0.5*width && j > 0.5*height) {
        p1.set(i, j);
        p2.set(i+w, j);
        p3.set(i, j+h);
    }
    if (i > 0.5*width && j > 0.5*height) {
        p1.set(i, j);
        p2.set(i+w, j);
        p3.set(i+w, j+h);
    }
    
    t.fill(c6[0]);

    t.triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

    }
}
return t;
}  