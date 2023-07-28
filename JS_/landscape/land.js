function landscape(width,height){
    return (width>height);

}
let wh1= landscape(800,600);
document.write('Landscape 800,600 ',wh1);

let wh2= landscape(600,800);
document.write('Landscape 600,800 ',wh2);

let wh3= landscape(1024,786);
document.write('Landscape 1024,786',wh3);