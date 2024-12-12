// cut the duplicate elements


function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

let arr = [1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];   


console.log(removeDuplicates(arr));

// test case

function test() {
    let input = [1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = removeDuplicates(input);

    if(expectedResult.toString() === result.toString()) {
        console.log("test passed");
        } else {
        console.log("test failed");
    }
}


