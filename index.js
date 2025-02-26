const screen = document.querySelector(".sketch-screen");

const resize = document.querySelector("#resize");

makeGrid(8);

screen.addEventListener("mouseover", (e) => {
  if (e.target.className === "cell") {
    e.target.style.backgroundColor = "#000000";

    setTimeout(() => {
      e.target.style.backgroundColor = "#000000";
    }, 100);
  }
});

resize.addEventListener("click", () => {
  const result = getIntegerInput(
    "Enter sketch screen size. eg. 16 -> 16 * 16 grid",
    100
  );

  if (result !== null) {
    resetGrid();
    makeGrid(result);
  }
});

function getIntegerInput(message, maxValue = 100) {
  while (true) {
    const userInput = prompt(message);

    if (userInput === null) {
      return null;
    }

    const num = Number(userInput);

    if (!Number.isInteger(num)) {
      alert("Please enter a valid integer.");
      continue;
    }

    if (num > maxValue) {
      alert(`Please enter an integer not greater than ${maxValue}.`);
      continue;
    }

    return num;
  }
}

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

function resetGrid() {
  while (screen.firstChild) {
    screen.removeChild(screen.firstChild);
  }
}
