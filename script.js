const GRIDSIZE = 600;
const grid = document.querySelector(".grid");
const resizeButton = document.querySelector(".resize");

const createGridCell = (dimensions) => {
    const size = `${GRIDSIZE / dimensions}px`;
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = size;
    cell.style.height = size;
    cell.addEventListener("mouseenter", handleCellHover);
    return cell;
}

const addResizeEvent = () => {
    resizeButton.addEventListener("click", (e) => {
        let newSize;
        do {
            newSize = Number(prompt("New dimensions (ex. 16): "));
        } while (isNaN(newSize) || newSize < 1 || newSize > 100);
        grid.replaceChildren();
        fillGrid(newSize);
    })
}

const handleCellHover = (e) => {
    const color = createRGBColor();
    e.target.style.backgroundColor = `rgb(${color[0]},${color[1]}, ${color[2]})`;
}

const fillGrid = (dimensions = 16) => {
    for (let i = 0; i < dimensions * dimensions; i++) {
        grid.append(createGridCell(dimensions));
    }
}

const createRGBColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    return rgb;
}

fillGrid();
addResizeEvent();