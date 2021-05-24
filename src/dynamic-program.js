// const lcs = (str1, str2) => {
//     let max = 0
//     let index = 0
//     let lcsArr = new Array(str1.length + 1)
//     for (var i = 0; i < str1.length; i++) {
//         lcsArr[i] = new Array(str2.length + 1)
//         for (let j = 0; j < str2.length; j++) {
//             lcsArr[i][j] = 0
//         }
//     }
//     console.log('lcsArr', lcsArr)
// }

// function ta(table) {
//     for (let yLen = table.length, y = yLen - 1; y >= 0; y--) {
//         for (let xLen = table[0].length, x = xLen - 1; x >= 0; x--) {
//             if (x == xLen - 1 || y == yLen - 1) {
//                 table[y][x] = 1
//             }else{
//                 table[y][x]=table[y+1][x]+table[y][x+1]
//             }
//         }
//     }
//     return table[y][x]
// }
// lcs('wystan', 'wangshuang_wystan')


function fibonacci(n) {
    let n1 = 1,
        n2 = 1,
        sum = 1
    for(let i = 3; i <= n; i += 1) {
        sum = n1 + n2
        n1 = n2
        n2 = sum
    }
    return sum
}
console.log(fibonacci(50))