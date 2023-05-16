function opart3(n, m) {
    image(checker3(n, 1, map(m, 0, width, 0, 1)), 0, 0, width, height);
}

function checker3(n, s, p) {
    let checker = createGraphics(width, height);
  
  
    w = width / (2 * n);
    h = s*w;
    nj = height / h;
  
    let prog = 0;
    let i = 0;
  
    while(prog < width) {
        if(prog <= p * width){
            w = sin(map(prog, 0, width*p, 0.5*PI, 0.98*PI))*width / (2 * n);
        } else {
            w = sin(map(prog, width*p, width, 0.98*PI, 0.5*PI))*width / (2 * n);
        }
  
        for (let j = 0; j < nj; j++) {
            checker.noStroke();
            if ((i+j)%2==0) {
                checker.fill(c3[0]);
            } else {
                checker.fill(c3[1]);
            }
            checker.rect(prog, j*h, w, h);
        }
  
      prog = prog + w;
      i++;
    }
  
    return checker;
}