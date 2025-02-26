//need to set a limit for size to be max 100 or 64 later

const screen = document.querySelector(".sketch-screen");
screen.addEventListener("mouseover", (e) => {
  if (e.target.className === "cell") {
    e.target.style.backgroundColor = "#000000";

    setTimeout(() => {
      e.target.style.backgroundColor = "#dcdcd8";
    }, 500);
  }
});

makeGrid(16);

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      // cell.style.transition = "background-color 0.3s ease-out";
      row.appendChild(cell);
    }
    screen.appendChild(row);
  }
}

//add hovering effect
