// Write a program that returns the transpose of a given matrix

function  transposeMatrix(){
    let transposed = [];

    for(i =0; i < matrix[0].length;i++) {
        transposed[i] = [];
        for(let j = 0; j < matrix.length; j++) {
            transposed[i][j] = matrix[i][j];
        }
    }

    return transposed;
}

const matrix = [
    [1 , 2, 3],
    [4 , 5, 6],
    [7 , 8, 9]
];

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);


// test case

function test() {
    let input = [[]]
}