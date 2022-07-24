let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
let sum = scores.reduce((sum, n) => 
    n%2===0?sum:sum+n
,0)
console.log(sum)