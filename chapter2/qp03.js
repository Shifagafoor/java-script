function addMatrix(matrixA, matrixB) {
    const result =[];

    for(let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for(let j = 0; j < matrixA.length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    
    return result;
}


const matrixA =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

const result = addMatrix(matrixA, matrixB);
console.log("Resultant matrix");
console.log(result);




// test case

function test() {
    if(matrixA , matrixB)
}