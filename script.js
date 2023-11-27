const gridContainer = document.querySelector(".gridContainer");
let squaresPerSide = 5; 
let totalSquares = squaresPerSide ** 2;
let cardWidth = ((100 / squaresPerSide) -2) + "vw";

// one node can oly be added t othe DOM once, therefore the nodes have to be
// created inside the for loop
for (let i = 0; i < totalSquares; i++) {    
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = cardWidth;
    gridContainer.appendChild(card);
}