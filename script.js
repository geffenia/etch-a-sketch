const GRIDSIZE = 600;
const grid = document.querySelector(".grid");

const createGridCell = (dimensions) => {
    const size = `${GRIDSIZE / dimensions}px`;
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = size;
    cell.style.height = size;
    return cell;
}

const fillGrid = (dimensions = 16) => {
    for (let i = 0; i < dimensions * dimensions; i++) {
        grid.append(createGridCell(dimensions));
    }
}

fillGrid();