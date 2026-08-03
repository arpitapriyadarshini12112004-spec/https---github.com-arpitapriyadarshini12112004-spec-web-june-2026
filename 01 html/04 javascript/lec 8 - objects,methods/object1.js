const user = {
    name: "Arpita",
    age: 21
}
//user = {} // error ->assignment to constant variable
/**
 * const object
 * 1. existing key can be updated
 * 2. existing key can be deleted
 * 3. new key can be added
 */

user.name = "Avinash"
console.log(user)

delete user.age
//console.log(user)

user.address = "BBSR"
console.log(user)
//document comment

/**
 * Object.seal()
 * 1. existing can be updated
 * existing key cannot be deleted
 * new key cannot be added
 */

const employee = {
    name: "Swatismita",
    age: 21
}
Object.seal(employee)
console.log(employee)

employee.name = "Arpita"
console.log(employee)

delete employee.name
console.log(employee)

employee.address = "BBSR"
console.log(employee)




/**
 * Object.freeze()
 * 1. existing can be updated
 * existing key cannot be deleted
 * new key cannot be added
 */

const student = {
    name: "Swatismita",
    age: 21
}
Object.freeze(student)
console.log(student)

student.name = "Arpita"
console.log(student)

delete student.name
console.log(student)

student.address = "BBSR"
console.log(student)

