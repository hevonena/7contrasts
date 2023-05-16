function opart5(n) {
    let lin1 = lines(n, 0);
    let lin2 = lines(n, 1);
    let mask = diam(n, 5, 3);
    lin2 = lin2.get();
    lin2.mask(mask);
    image(lin1, 0, 0, width, height);
    image(lin2, 0, 0, width, height);
  }

function lines(n, m) {
    let l = createGraphics(width, height);
    
    let w = width/(2*n);
    let x = 0;
    let dx = 0;
    if(m<1) {
        x = height/w;
        dx = mouseY % (2*w);
    } else {
        x = width/w;
        dx = mouseX % (2*w);
    }
    for (let i = 0; i <= x; i++) {
        if (i%2==0) {
        l.fill(c5[0]);
        } else {
        l.fill(c5[1]);
        }
        l.noStroke();
        if(m<1) {
        l.rect(0, i*w + dx - w, width, w);
        } else {
        l.rect(i*w + dx - w, 0, w, height);
        }
    }
    return l;
}
  
function diam(n, d1, d2) {
    let d = createGraphics(width, height);
    d.noStroke();
    let w = width/d1;
    let h = height/d2;

    for (let i = 0; i < d1; i++) {
        for (let j = 0; j < d2; j++) {
        let p0 = createVector(0.5*w + w*i, 0.5*h + h*j);
        let p1 = createVector(p0.x, p0.y-0.5*h);
        let p2 = createVector(p0.x + 0.5*w , p0.y);
        let p3 = createVector(p0.x , p0.y + 0.5*h);
        let p4 = createVector(p0.x - 0.5*w, p0.y);

        d.beginShape();
        d.vertex(p1.x, p1.y);
        d.vertex(p2.x, p2.y);
        d.vertex(p3.x, p3.y);
        d.vertex(p4.x, p4.y);
        d.endShape(CLOSE);

        }
    }

    return d;
}
  