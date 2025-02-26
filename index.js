//need to set a limit for size to be max 100 or 64 later

function makeGrid(size) {
  let screen = document.querySelector(".sketch-screen");
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      row.appendChild(cell);
    }
    screen.appendChild(row);
  }
}

makeGrid(16);

//add hovering effect
