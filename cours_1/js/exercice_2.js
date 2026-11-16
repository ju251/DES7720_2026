
//let refletImage;
let abstraitImage;

function preload() {
    //refletImage = loadImage("./assets/images/reflet.jpg"); // ./ = reculer/sortir du dossier actuel
    abstraitImage = loadImage("./assets/images/abstrait.jpg"); // ./ = reculer/sortir du dossier actuel


    
   } 

function setup() {
    abstraitImage.resize(300, 300);
    createCanvas(abstraitImage.width*2, abstraitImage.height);
    background(0);
    //image(refletImage, 0,0);
    //copy(refletImage, 0, 0, 100, 100, width/2, height/2, 100, 100);
    //  position depart, grosseurDepart(chercher dans l'image),,grosseur copie fin

}

function draw() {
    noFill();
    stroke(255, 10, 20, 50);
    ellipse(mouseX, mouseY, 50, 50);
    image(abstraitImage, 100, 100, 50, 50);
    //image(refletImage, 0, 0);
    noFill();
    stroke(200, 10, 100);
    //copy(refletImage, mouseX,mouseY, 100, 100, mouseX + refletImage.width, mouseY, 100, 100);
   

}

function mouseDragged() {
    //copy(refletImage, mouseX,mouseY, 100, 100, mouseX + refletImage.width, mouseY, 100, 100);
    mousePressed();

}

function mousePressed() {
    copy(abstraitImage, mouseX,mouseY, 10, 10, mouseX + abstraitImage.width, mouseY, 40, 40);
}

/*
Pistes d’exploration — choisissez une idée ou suivez la vôtre.

- Changez la photo pour dessiner avec une image de votre choix.
- Changez la taille du fragment que vous prélevez dans la photo. Essayez un carré de 20 × 20 pixels, puis de 100 × 100 pixels.
- Dessinez avec un GIF animé pour prélever des fragments à différents moments.
- Remplacez la photo par une vidéo et dessinez avec des fragments de cette vidéo.
- Dessinez avec des formes au clic ou au glisser.
- Ajoutez deux états au sketch : un double-clic (doubleClicked()) pourrait faire passer de la photo aux formes.
*/
