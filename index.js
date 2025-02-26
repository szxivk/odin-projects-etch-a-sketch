//need to set a limit for size to be max 100 or 64 later

function makeGrid(size) {
  let screen = document.querySelector(".sketch-screen");
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("row");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("cell");

      column.appendChild(row);
    }
    screen.appendChild(column);
  }
}

makeGrid(16);

//add hovering effect
