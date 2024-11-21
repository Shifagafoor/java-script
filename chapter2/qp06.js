function identityMatrix(matrix){
    const n = matrix.length;

    if(matrix.every(row => row.length === n)) {
        return false;
    }
}
