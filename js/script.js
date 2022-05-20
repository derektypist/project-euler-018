// Set Up Variable
let txt = "";

/* 
    Function to find the maximum total in a triangle as
    described in https://projecteuler.net/problem=18

*/
function maximumPathSumI(triangle) {
    const triangleCopy = triangle.map(row => [...row]);
    for (let i=triangleCopy.length-2;i>=0;i--) {
        for (let j=0;j<=i;j++) {
            triangleCopy[i][j] = Math.max(triangleCopy[i+1][j],triangleCopy[i+1][j+1]);
        }
    }

    return triangleCopy[0][0];
}