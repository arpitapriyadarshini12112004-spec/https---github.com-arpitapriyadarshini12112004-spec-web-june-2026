function increment() {
    let number = 10
    return function plusOne(){
        console.log("Adding one")
        number++
        console.log("number value is", number)
    }
}

const nestedFun = increment()
//console.log("//////",nestedFun)
nestedFun()
nestedFun()

function decrement() {
    let number = 10
    return function minusOne(){
        console.log("Minus one")
        number--
        console.log("number value is", number)
    }
}

const nestedFun1 = decrement()
//console.log("//////",nestedFun)
nestedFun1()
nestedFun1()