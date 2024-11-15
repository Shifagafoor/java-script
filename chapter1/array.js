let thesum = 0;
 let asum = 0;
 function find(arr) {
     for (i = 0; i <= arr.length + 1; i++) {
         thesum = thesum + i;
     }
     for (j = 0; j < arr.length; j++) {
         asum = asum + arr[j];
     }
     console.log("the sum :", thesum)
     console.log("a sum :", asum)
     console.log("missing number:",thesum-asum)
 }
 find([1,2,3,5,6,7,8])