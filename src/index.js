module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    return matrix.flatMap((row, index) => 
        index % 2 === 1 ? row.reverse() : row
);
}
