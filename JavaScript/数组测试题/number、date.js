let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map(item => {
    switch (item) {
        case 0: return '周日'; break;
        case 1: return '周一';break;
        case 2: return '周二';break;
        case 3: return '周三';break;
        case 4: return '周四';break;
        case 5: return '周五';break;
        case 6: return '周六';break;
    }
})
console.log(arr2);