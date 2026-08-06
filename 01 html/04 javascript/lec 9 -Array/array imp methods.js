let number = [10, 20, 30, 40, 50]

//for(let i=0; i < number.length; i++ )
    //console.log(number[i]);

//number.forEach(function printNumbers(value, idx, arr){
    //console.log("value is", value, "at idx", "of array",arr);

//}) 
//number.forEach( printNumbers)
//function printNumbers (value, idx, arr){
    //console.log("value is", value, "at idx", "of array",arr);


//}
//const printNumbers = function (value, idx, arr){
    
    //console.log("value is", value, "at idx", "of array",arr);

//}
//number.forEach(printNumbers)


//number.forEach(function (value, idx, arr){
//console.log("value is", value, "at idx", "of array",arr);

//})
//number.forEach((value, idx, arr) => {
    //console.log("value is", value, "at idx", "of array",arr)
//})


//=================map function

//const numbersIncreasedByTwo = number.map((number, idx, arr )=> {
//console.log("value is", value, "at idx", "of array",arr)
//return value +2    
//})

//console.log("numbersIncreasedByTwo", numbersIncreasedByTwo)

//const squareNumbers = number.map(value => value * value)
//console.log("squareNumbers", squareNumbers)

// const user = [
// {
//     id: 101,
//     name:'Arpita sahoo',
//     salary: 100000
// },
//  {
//     id: 102,
//     name:'Avinash majhi',
//     salary: 120000
// },
//  {
//     id: 103,
//     name:'Ankita parida',
//     salary: 130000
// },
//  {
//     id: 104,
//     name:'Ajit parijaa',
//     salary: 140000
// },

// ];


 //const modifiedUsers = user.map((value) => {
    //console.log("value is", value)
    //return{
        //id:value.id,
        //firstName: value.name.split(" ")[0],
        //bonus: value.salary*.10
    //}

//})



 //const modifiedUsers = user.map((user) => ({
        //id:user.id,
        //firstName: user.name.split(" ")[0],
        //bonus: user.salary*.10
    //}))
//console.log("// modified users", modifiedUsers)


//============fliter method===============
    
//======filter method====
// numbers = [10,11,20,21,30,31]
// const divisiblebyten = numbers.filter((value,idx,arr) =>{
// console.log("value is",value, "at idx",idx ,"of array", arr)
// return value %10==0
// })
// console.log("divisible by ten",divisiblebyten)

// // filter returnspecific value but in  map it returns all value
//  divisiblebyten.foreach (value =>console.log(value))




// ===========questions method========

//  1. const users =[
    
//   { id: 1, name: "Amit", isActive: true },
//   { id: 2, name: "Rahul", isActive: false },
//   { id: 3, name: "Neha", isActive: true }

// ]
// // 

// users.filter(user=> user.isactive)
// 2. users.map(user => user.name)

// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mobile", price: 20000 },
//   { id: 3, name: "Tablet", price: 30000 }
// ];



// =========some()========
// numbers = [10,20,30,40,]
// const isanyoddpresent = numbers.some(num => num % 2==1)
// console.log("//is any odd number is present",isanyoddpresent )

// const iseverymembersareeven = numbers.every(num => num%2==0)
// console.log("//is any odd member is present are even",iseverymembersareeven  )


// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mobile", price: 20000 },
//   { id: 3, name: "Tablet", price: 30000 }
// ];
// const result = numbers.some(num => num>40000)
// console.log("// is the products are above 40000" isproducts are above 40000)


// =========find method=========
 numbers = [10, 20, 30, 40, 51]
// const number = numbers.find(num => num==41)
//  console.log("is 41 found", number)

//  const numberidx = numbers.findindex(num => num==41)
//  console.log("is 41 found",numberidx)
 

//   const products = [
//    { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mobile", price: 20000 },
//    { id: 3, name: "Tablet", price: 30000 }
//  ];

//  const product = products.find(product =>product.id==2  )
//  console.log("is id is found ", product)
//  const productsindex=products.findindex(product=>product.id==2)
//  console.log(" is is is found",productindex)

// const students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 }
// ];
// const student = students.find( student =>student.name=="c" )

// console.log("is c is found ", students)

// const studentsindex = students.findindex(student => student.name=="c")

// console.log("is c is found ", students)




//========reduce method================

 const sum = numbers.reduce((preVa1, currVa1, idx, arr) => {
    console.log("previous value is", preVa1, "current value is",currVa1, "at index",idx, "of array",arr)
    return preVa1 + currVa1
})
console.log("/////////// sum", sum)



const orders = [
    {
        id: 101,
        amount: 2000,
        status: "Delivered"
    },
    {
        id: 102,
        amount: 3000,
        status: "Delivered"
    },
    {
        id: 103,
        amount: 6000,
        status: "Delivered"
    },

]


//1. find the orders whoose ststus is delivered
const deliveredOrders = orders.filter(order => order.status === "Delivered");
console.log("deliveredOrders", deliveredOrders);

//2. Merge the delivered orders amount to get the total sale

const totalSale = deliveredOrders.reduce((prev,curr) => {
    console.log(".........prev",prev, "curr", curr)
    return prev + curr.amount
}, 0)
 console.log("///////Total sale", totalSale);




 const users = [
    {
        id: 1,
        name: "sarthak",
        age: 20
     },
 
    {
        id: 2,
        name: "Amit",
        age: 26
     },
 
    {
        id: 101,
        name:"Nikhil" ,
        age: 28
     },
 ]

 //1.Find the avarage age of the users

 const totalAge = users.reduce((prev, curr) => prev + curr.age, 0) 
    console.log("//////total age",totalAge)
 console.log("//////avarage age",totalAge / users.length)




    






