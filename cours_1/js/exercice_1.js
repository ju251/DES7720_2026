// DES7720 — EXERCICE 1 — Introduction à p5.js

// Charger les fichiers avant de commencer.
function preload() {
}

// Préparer le sketch une seule fois.
function setup() {
    createCanvas(300,300); // Créer un canevas de 640x640 pixels hauteur et largeur
    background(30,10,140); //rvb

    rectMode(CENTER); //changer le point d'origine du rectangle
    rect(mouseX,mouseY,50,50); // deux premier = position dans le canvas, deux dernier largeur et hauteur


}

// Dessiner en boucle.
function draw() {
    background(mouseX,10,255);
    ellipse(mouseX,mouseY,mouseX,mouseY);
}
