function opart1(n, m) {
    rectMode(CORNER);
    let checker_1 = checker2(n, m, true);
    let checker_2 = checker2(n/m, 1/m, false);
  
    let mask = createGraphics(width, height);
    mask.circle(mouseX, mouseY, 2*m*width/n);
  
    checker_1 = checker_1.get();
    checker_1.mask(mask);
  
  
    image(checker_2, 0, 0, width, height);
    image(checker_1, 0, 0, width, height);
  
    
}

function checker2(n, s, t) {
    let checker = createGraphics(width, height);
  
    w = width / (2 * n);
    h = s*w;
    nj = height / h;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < nj; j++) {
        if ((i+j)%2==0) {
          if (t) {
            checker.fill(c1[0]);
          } else {
            checker.fill(c1[2]);
          }
          
        } else {
          if (t) {
            checker.fill(c1[1]);
          } else {
            checker.fill(c1[0]);
          }
        }
        checker.noStroke();
        checker.rect(width/2 + i*w, height / 2 + j*h, w, h);
        checker.rect(width/2 - i*w - w, height / 2 - j*h- h, w, h);
        if ((i+j)%2==0) {
          if (t) {
            checker.fill(c1[1]);
          } else {
            checker.fill(c1[0]);
          }
        } else {
          if (t) {
            checker.fill(c1[0]);
          } else {
            checker.fill(c1[2]);
          }
        }
        checker.rect(width/2 + i*w, height / 2 - j*h - h, w, h);
        checker.rect(width/2 - i*w -w, height / 2 + j*h, w, h);
      }
    }
  
    return checker;
}

  