function numToWord(number) {
    const newNumArr = number.toString().split('')

    const nums = ['sifir', 'bir', 'iki', 'uc', 'dord', 'besh', 'alti', 'yeddi', 'sekkiz', 'doqquz']
    const tenNums = ['on', 'iyirmi', 'otuz', 'qirx', 'elli', 'altmish', 'yetmish', 'seksen', 'doqsan', 'yuz']
    switch (newNumArr.length) {
        case 0:
            console.log("hello");
            break
        case 1:
            var newNum = newNumArr.find(n => n === number.toString())
            console.log(nums[newNum])
            break
        case 2:
            if (newNumArr[1] === "0") {
                console.log(tenNums[Number(newNumArr[0] - 1)])
            } else {
                console.log(tenNums[Number(newNumArr[0] - 1)] + " " + nums[newNumArr[1]])
            }
            break
        case 3:
            console.log(nums[0])
            break
        default:
            return 'something went wrong'
    }
}

numToWord(23)
