const gridContainer = document.querySelector(".gridContainer");
generateGrid(5);

const body = document.querySelector('body');
body.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('card')) {
        //e.target.style.backgroundColor = 'red';
        //e.target.style.backgroundColor = getRandomColor();
        e.target.style.backgroundColor = getDarkerColor(e.target.style.backgroundColor);
    }
});
/* body.addEventListener('mouseout', function (e) {
    if(e.target.classList.contains('card')) {
        e.target.style.backgroundColor = 'cornflowerblue';
    }
}); */

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

function getDarkerColor(currentColor) {
    if (!currentColor) {
        console.log("undef");
        return getRandomColor();
    } else {
        let values = [0,0,0];
        let colors = currentColor.split(',');
        values[0] = colors[0].split('(')[1];
        values[1] = colors[1].split(' ')[1];
        values[2] = colors[2].slice(1, -1);

        const darkened = values.map(darkenColor);
        return "rgb("+darkened[0]+","+darkened[1]+","+darkened[2]+")";
    }    
}

function darkenColor(color) {
    let colorInt = parseInt(color) - 26;
    if (colorInt <= 0) {
        return 0;
    } else {
        return colorInt;
    }
}