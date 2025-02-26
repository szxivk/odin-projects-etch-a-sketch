//need to set a limit for size to be max 100 or 64 later

// can make a sep func that takes e and a color
const screen = document.querySelector(".sketch-screen");
screen.addEventListener("mouseover", (e) => {
  if (e.target.className === "cell") {
    e.target.style.backgroundColor = "#000000";

    setTimeout(() => {
      e.target.style.backgroundColor = "#000000";
    }, 100);
  }
});

makeGrid(8);

function makeGrid(size) {
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
