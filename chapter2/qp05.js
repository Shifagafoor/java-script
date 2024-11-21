function diagonalMatrix(matrix){
    const n = matrix.length;

    for( let i = 0; i < n; i++){
        for(let j = 0; j < n; j++) {
            if(i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}


const matrix1 = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
];

const matrix2 = [
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3]
];

console.log(diagonalMatrix(matrix1));
console.log(diagonalMatrix(matrix2));