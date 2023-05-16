function opart2(n) {
    let checker1 = checkerCenter(n);
    let checker2 = distort2(checker1, random(0, 1));
    image(checker2, 0, 0, width, height);
}

function checkerCenter(n) {
    let checker = createGraphics(width, height);
    let c = contrast(1);
  
    w = width / (2 * n + 1);
  
    // bottom right & top left
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        if ((i+j)%2==0) {
          checker.fill(c[0]);
        } else {
          checker.fill(c[1]);
        }
        checker.noStroke();
        checker.square(width/2 + w/2 + i*w, height / 2 + w/2 + j*w, w);
        checker.square(width/2 - i*w - w - w/2, height / 2 - j*w- w - w/2, w);
        checker.square(width/2 + w/2 + i*w, height / 2 - j*w - w - w/2, w);
        checker.square(width/2 - i*w -w - w/2, height / 2 + j*w + w/2, w);
  
        checker.square(width/2 - i*w - w/2, height / 2 - w/2, w);
        checker.square(width/2 - w/2, height / 2 - w/2 - j*w, w);
        checker.square(width/2 + i*w - w/2, height / 2 - w/2, w);
        checker.square(width/2 - w/2, height / 2 - w/2 + j*w, w);
      }
    }
  
    return checker;
}

function distort1(input) {

    let output = createImage(width, height);
    input.loadPixels();
    output.loadPixels();
    for (let i=0; i<input.width; i++) {
      for (let j=0; j<input.height; j++) { 
  
        let distance = dist(i, j, 0.5*width, 0.5*height);
        let angle = atan2(j-0.5*height, i-0.5*width);
        distance = distance * distance / dist(0, 0, 0.5*width, 0.5*height);
  
        let tx = 0.5*width + cos(angle) * distance;
        let ty = 0.5*height + sin(angle) * distance;
  
        output.set(i,j, input.get(tx, ty));
      }
    }
    output.updatePixels();
    return output;
  }
  
  
  function distort2(input, shift) {
  
    let output = createImage(width, height);
    input.loadPixels();
    output.loadPixels();
    for (let i=0; i<input.width; i++) {
      for (let j=0; j<input.height; j++) { 
  
        //let distance = dist(i, j, 0.5*width, 0.5*height);
        let angle = atan2(j-0.5*height, i-0.5*width);
  
        let tx = cos(angle/shift) * 0.5*i + 0.5*width;
        let ty = sin(shift*angle) * 0.5*j + 0.5*height;
  
        output.set(i,j, input.get(tx, ty));
      }
    }
    output.updatePixels();
    return output;
  }

  