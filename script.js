function log(message) {
    console.log('>' + message)
}


const cards = document.querySelectorAll('card');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragsend)
})

function dragstart() {
    log('CARD: Start dragging ')
}

function dragstart() {
    log('CARD: Is dragging ')
}


function dragstart() {
    log('CARD: Stop drag ')
}
 