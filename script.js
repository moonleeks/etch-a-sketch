const gridContainer = document.querySelector(".gridContainer");
let squaresPerSide = 4; 
let totalSquares = squaresPerSide ** 2;
let cardHeigth = ((90 / squaresPerSide) -3) + "vh";

// one node can oly be added t othe DOM once, therefore the nodes have to be
// created inside the for loop
for (let i = 0; i < totalSquares; i++) {    
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.height = cardHeigth;
    gridContainer.appendChild(card);
}