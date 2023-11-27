const gridContainer = document.querySelector(".gridContainer");
generateGrid(20);

const body = document.querySelector('body');
body.addEventListener('mouseover', function (e) {
    if(e.target.classList.contains('card')) {
        e.target.style.backgroundColor = 'red';
    }
});
body.addEventListener('mouseout', function (e) {
    if(e.target.classList.contains('card')) {
        e.target.style.backgroundColor = 'cornflowerblue';
    }
});

const genButton = document.querySelector('button');
genButton.addEventListener('click', () => {
    squaresPerSide = parseInt(prompt("Please enter number of squares per side"));
    
    //regenerate
})

function generateGrid(squaresPerSide) {
    //clear existing cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(e => e.remove());

    let totalSquares = squaresPerSide ** 2;
    let cardHeigth = ((90 / squaresPerSide) -3) + "vh";

    // one node can only be added to the DOM once, therefore the nodes have to be
    // created inside the for loop
    for (let i = 0; i < totalSquares; i++) {    
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.height = cardHeigth;    
        gridContainer.appendChild(card);
    }
    
    
}