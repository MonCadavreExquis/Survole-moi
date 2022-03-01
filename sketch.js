let sketchPointing = function (p) {
  
  
let images = [];
let counter = 0;
let loading = true;
let totalImages = 10;
  
  let leftMargin;
  let rightMargin;
  let topMargin;
  let bottomMargin;

  let firstVerticalMargin;
  let secondVerticalMargin;
  
  let firstHorizontalMargin;
  let secondHorizontalMargin;
  
  function imagesLoading(filename, number) {
    p.loadImage(filename, imageLoaded);
    
    

    function imageLoaded(image) {
      images[number]=image;

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }


p.setup = function() {
  imagesLoading("images/flou.png",0);
  imagesLoading("images/topLeft.png",1);
  imagesLoading("images/topMid.png",2);
  imagesLoading("images/topRight.png",3);
  imagesLoading("images/centerLeft.png",4);
  imagesLoading("images/centerMid.png",5);
  imagesLoading("images/centerRight.png",6);
  imagesLoading("images/bottomLeft.png",7);
  imagesLoading("images/bottomMid.png",8);
  imagesLoading("images/bottomRight.png",9);


  p.imageMode(p.CENTER);

  
leftMargin = p.windowWidth*0.5-p.windowHeight*0.3;
rightMargin = p.windowWidth*0.5+p.windowHeight*0.3;
topMargin = p.windowHeight*0.05;
bottomMargin = p.windowHeight*0.95;

firstVerticalMargin = leftMargin + p.windowHeight*0.2;
secondVerticalMargin = leftMargin + p.windowHeight*0.4;
  
firstHorizontalMargin = topMargin + p.windowHeight*0.3;
secondHorizontalMargin = topMargin + p.windowHeight*0.6;
  
  p.createCanvas(p.windowWidth, p.windowHeight);
}

   p.windowResized = function() {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
  
  
p.draw = function() {
  
     if (loading) {
      
      p.stroke(255);
      p.noFill();
      p.rect(p.windowWidth*0.5-100, p.windowHeight*0.5-10, 200, 20);

      p.noStroke();
      p.fill(255);
      var w = (200 * counter) / totalImages;
      p.rect(p.windowWidth*0.5-100, p.windowHeight*0.5-10, w, 20);
    } else{
  
  p.background(0);
  p.textSize(p.windowWidth*0.03);
  p.textAlign(p.CENTER,p.CENTER);
  
      p.tint(255,0,100);
  
     if(p.mouseX<leftMargin || p.mouseX>rightMargin || p.mouseY<topMargin || p.mouseY>bottomMargin){
        p.image(images[0],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);
        p.text("survole-moi", p.windowWidth*0.5, p.windowHeight*0.5);
       }else{
        if(p.mouseX<firstVerticalMargin && p.mouseY<firstHorizontalMargin){
        p.image(images[1],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);
       }else{
        if(p.mouseX<secondVerticalMargin && p.mouseY<firstHorizontalMargin){
        p.image(images[2],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);
       }else{
        if(p.mouseX<rightMargin && p.mouseY<firstHorizontalMargin){
         p.image(images[3],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);
       }else{
        if(p.mouseX<firstVerticalMargin && p.mouseY<secondHorizontalMargin){
        p.image(images[4],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);  
       }else{
        if(p.mouseX<secondVerticalMargin && p.mouseY<secondHorizontalMargin){
        p.image(images[5],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);  
       }else{
        if(p.mouseX<rightMargin && p.mouseY<secondHorizontalMargin){
        p.image(images[6],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);  
       }else{
        if(p.mouseX<firstVerticalMargin && p.mouseY<bottomMargin){
        p.image(images[7],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);  
       }else{
        if(p.mouseX<secondVerticalMargin && p.mouseY<bottomMargin){
        p.image(images[8],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);
       }else{
        if(p.mouseX<rightMargin && p.mouseY<bottomMargin){
        p.image(images[9],p.windowWidth*0.5,p.windowHeight*0.5,p.windowHeight*0.6,p.windowHeight*0.9);
       }  
       }
       }
       }
       }
       }
       }
       }
       }
       }
    }
}
  
 };

let myPointing = new p5(sketchPointing); 
