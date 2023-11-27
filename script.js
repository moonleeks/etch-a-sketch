const gridContainer = document.querySelector(".gridContainer");

// one node can oly be added t othe DOM once, therefore the nodes have to be
// created inside the for loop
for (let i = 0; i < 15; i++) {    
    const card = document.createElement('div');
    card.classList.add('card');
    gridContainer.appendChild(card);
}