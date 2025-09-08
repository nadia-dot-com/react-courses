export function getGridSize(grid: unknown[][]) {
    const rows = grid.length;
    const cols = grid[0].length;
    return [rows, cols]
}