const king = document.querySelector(".chess-piece");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

king.addEventListener("drag", dragging);
king.addEventListener("dragstart", dragStart);

function dragEnter(e) {
    e.target.classList.add("highlight");
    infoDisplay.textContent = "You are entering the space of " + e.target.classList;
}

function DragLeave(e) {
    infoDisplay.textContent = "You are leaving the space of " + e.target.classList;
    e.target.classList.remove("highlight");
}

function dragDrop(e) {
    const hasKing = e.target.contains(king);

    if (!hasKing) {
        e.target.append(beingDragged);
        e.target.classList.remove("highlight");
        infoDisplay.textContent = "You have dropped something into " + e.target.classList;
    } else {
        infoDisplay.textContent = "It looks like the king did not move too far ;)"
    }
}

function dragEnd(e) {
    const hasKing = e.target.contains(king);

    if (!hasKing) {
        e.target.classList.add("target");
        setTimeout(() => e.target.classList.remove("target"), 100);
        infoDisplay.textContent = "Your drag has ended in " + e.target.classList;
    }
}

function dragOver (e) {
    e.preventDefault();
    infoDisplay.textContent = "You are dragging something over " + e.target.classList
}

squares.forEach(square => {
    square.addEventListener("dragover", dragOver)
    square.addEventListener("dragenter", dragEnter)
    square.addEventListener("dragleave", DragLeave)
    square.addEventListener("drop", dragDrop)
    square.addEventListener("dragend", dragEnd)
})

let beingDragged;

function dragStart (e) {
    beingDragged = e.target;
    infoDisplay.textContent = "dragging has started on " + beingDragged.id;
}
function dragging () {
    infoDisplay.textContent = "You are dragging a " + beingDragged.id
}
