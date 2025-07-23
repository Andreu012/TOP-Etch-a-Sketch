const container = document.getElementById('container');
let size = 16; 

createGrid(size);

function createGrid(size) {
    container.innerHTML = '';
    SQwidth = 800 / size; 
    SQheight = 800 / size;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.style.width = SQwidth + 'px';
        square.style.height = SQheight + 'px';

        square.addEventListener('mouseenter', () => {
            if (rainbow) {
                let R = Math.floor(Math.random() * 255);
                let G = Math.floor(Math.random() * 255);
                let B = Math.floor(Math.random() * 255);
                square.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
            } else {
                square.style.backgroundColor = 'rgb(0, 0, 0)';
            }
        });
        container.appendChild(square);
    }
}


document.getElementById('change-grid').onclick = () => {
    let newSize = prompt("Enter grid size (e.g., 16 for a 16x16 grid):");
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Invalid input. Please enter a positive whole number between 1 and 100.");
        return;
    }
    size = newSize;
    createGrid(size);
};

let rainbow = false;
const checkbox = document.getElementById('box');
checkbox.addEventListener('change', () => {
    rainbow = checkbox.checked;
    console.log("Rainbow", rainbow);
});
document.addEventListener("DOMContentLoaded", () => { 
    checkbox.checked = false;
});