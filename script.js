const gridContainer = document.querySelector(".gridContainer");
generateGrid(5);

const body = document.querySelector('body');
body.addEventListener('mouseover', function (e) {
    if(e.target.classList.contains('card')) {
        //e.target.style.backgroundColor = 'red';
        e.target.style.backgroundColor = getRandomColor();
    }
});
body.addEventListener('mouseout', function (e) {
    if(e.target.classList.contains('card')) {
        e.target.style.backgroundColor = 'cornflowerblue';
    }
});

const genButton = document.querySelector('button');
genButton.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt(
        "Please enter number of squares per side"));
    if (squaresPerSide <= 100) {
        generateGrid(squaresPerSide);
    } else {
        generateGrid(100);
    }
    
})

function generateGrid(squaresPerSide) {
    //clear existing cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(e => e.remove());

    let totalSquares = squaresPerSide ** 2;
    let cardHeigth = ((900 / squaresPerSide) -1) + "px";

    // one node can only be added to the DOM once, therefore the nodes have to be
    // created inside the for loop
    for (let i = 0; i < totalSquares; i++) {    
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.height = cardHeigth;    
        gridContainer.appendChild(card);
    }    
}

function getRandomColor() {
    //rgb() is not a function in javascript but CSS, therefore we pass a String
    // that looks like "rgb(1,2,3)"
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return "rgb("+red+","+green+","+blue+")";
    

    

}