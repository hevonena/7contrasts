function opart4(n) {
    image(checker4(n, 1, 4, 0.6), 0, 0, width, height);
}


function checker4(n, s, p, m) {
  let checker = createGraphics(width, height);
  
  w = width / (2 * n);
  h = s*w;
  nj = height / h;

  let progY = 0;
  let j = 0;

  while(progY < height) {
    

    for (let i = 0; i < 2*n+1; i++) {
      checker.noStroke();
      if ((i)%2==0) {
        checker.fill(c4[0]);
      } else {
        checker.fill(c4[1]);
      }
      let c = m * w * map(sin(map(progY+frameCount/5, 0, height, 0, p*TWO_PI)), -1, 1, 0, 1);
      checker.rect(i*w-c, progY, w, h);
    }
    progY = progY + h;
    j++;
    
  }
  progY = 0;
  while(progY < height) {
    checker.stroke(200);
    checker.strokeWeight(5);
    checker.line(0, progY, width, progY);
    progY = progY + h;
  }

  return checker;
}