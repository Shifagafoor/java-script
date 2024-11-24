// Write a program to check if the given matrix is an identity matrix

function isIdentityMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j && matrix[i][j] !== 1) {
                return false; 
            } else if (i !== j && matrix[i][j] !== 0) {
                return false; 
            }
        }
    }
    
    return true; 
}

const matrix1 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

const matrix2 = [
    [1, 0, 0],
    [0, 0, 1],
    [0, 0, 0]
];

console.log(isIdentityMatrix(matrix1)); 
console.log(isIdentityMatrix(matrix2)); 


// test case 

   function test() {
    let input1 = [[0, 1, 0] , [1, 1, 0] , [1, 1, 1,]]
    let input2 = [[0, 1, 0] , [1, 1, 1] , [1, 1, 1,]]
    let result = [true, false]
   }


