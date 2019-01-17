function createGrid (input) {
  let square = Math.pow(input, 2);
  for (let i = 0; i < square; i++) {
    var div = document.createElement("div");
    div.classList.add('cell');
    div.style.border = "thin solid";
    div.style.width = 100/input + "%";
    div.style.height = 100/input + "%";
    div.style.backgroundColor = 'white';
    document.getElementById("grid").appendChild(div);
  }
  const cells = document.querySelectorAll('.cell');
  cells.forEach((div) => {
    div.addEventListener('mouseenter', (x) => {
      x.target.style.background = 'black';
    });
  });
}

function reset(){
  while (grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
  var size = document.getElementById("sizeOfSketchpad").value;
  createGrid(size);
}

createGrid(3);
