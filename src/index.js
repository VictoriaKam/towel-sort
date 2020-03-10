module.exports = function towelSort(matrix) {
    let newArr = [];
    if (matrix === undefined) {
        return newArr;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
        for (let m = 0; m < matrix[i].length; m++) {
            newArr.push(matrix[i][m]);
        }
    }
    return newArr;
}
