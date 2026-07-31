function sayHello() {
    console.log("Hello, welcome back!")
}
 sayHello()

function sayHii() {
    console.log("Hello World")
}
 sayHii()

function myName() {
console.log("Arpita")
}
myName()

function myAge(){
    console.log("21")
}
myAge()

function greet(){
    console.log("Have a nice day")
}
greet()


function greet(name="Guest"){
    console.log("Welcome",name)
}
greet("Arpita")


function showAge(age ="20 ") {
    console.log("Age is", age)
}
showAge("21")


function color(col = "Blue") {
    console.log("My favourite color is", col)
}
color("Black")


function place(pla = "puri"){
    console.log("My favourite place",pla )
}
place("konark")
place()

function student(name = "Arpita", course = "Bsc ITM"){
    console.log("Name",name)
    console.log("Course",course)
}
student("Riya", "BCA")
student()


function add(a,b){
    return (a + b)
}
console.log(add(20,30))

function addStudent(name){
    return "student name -" + name
}
let studentName = addStudent("Arpita")
console.log(studentName)

function addCountry(name){
    return "country name -" + name
}
let countryName = addCountry("India")
console.log(countryName)

function addfruit(name){
    return "fruit name -" + name
}
let fruitName = addfruit("dragon fruit")
console.log(fruitName)

function addRoll(roll){
    return "Roll number -" + roll
}
let studentRoll = addRoll("23DIT113")
console.log(studentRoll)
