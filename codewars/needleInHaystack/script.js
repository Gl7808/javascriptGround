
// function findNeedle(haystack) {
//     let pos = 0;
//     for (let i = 0; i<haystack.length; i++) {
//         if (haystack[i] === 'needle'){
//             pos = i
//         }
//     }
//     return "found the needle at position " + pos
// }





// Найти нужный элемент в массиве и вернуть его позицию в этом массиве
// Более правильная запись

let findNeedle = (haystack) => {
    return "found the needle at position " + haystack.indexOf("needle")
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))


// Использование indexOf