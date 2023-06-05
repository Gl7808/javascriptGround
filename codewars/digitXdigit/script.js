


function squareDigits(num){
    let arr = num.toString()
    let sum = []
    let str = ''
    // console.log("string is " + arr.charAt(0))
    for (let i = 0; i<arr.length; i++){
        sum.push(Math.floor(arr.charAt(i)*arr.charAt(i)))
        str += sum[i]
    }
    return Math.floor(str);
}


console.log(squareDigits(3212))