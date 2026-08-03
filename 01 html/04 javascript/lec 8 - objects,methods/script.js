// const user = {
//     firstname : "Arpita",
//     lastname : "Sahoo",
//     age : 21,
//     isGraduated : true,
//     'address' : 'BBSR',
//     'course-fee' : 30000.99, // Without this '' it will throw an error, because of special char, blank space,etc.
//     greet : function(){
//         console.log("Arpita says Hello !!!")
//         console.log("My Fullname is: ",this.fullname) // Without 'this' is throws undefinied
//     },

//     add : function(a,b){
//         console.log("Adding to numbers: ",(a+b))
//     }
//     // hello :() =>{
//     //     console.log("Hello Everyone!")
//     // } 
// }

// // Extract Complete Object
// // console.log("user object: ",user)

// // Extract single values from objects
// console.log("first name is: ",user.firstname)
// console.log("last name is: ",user.lastname)
// console.log("Full name is: ",user.firstname,user.lastname )

// // Alternative way
// console.log("age is: ",user['age'])
// // console.log("age is: ",user.course-fee)
// console.log("course fee is: ",user['course-fee'])
// console.log("full name is: ",user.fullname) // undefiend - as key is not present in Object.

// // ADD/UPDATE key to object
// user.fullname = "Arpita priyadarshini sahoo"
// user.isGraduated = True
// user['Aadhar No'] = 415480707148
// console.log(user)

// //  Access Methods
// user.greet()
// // user.hello()
// user.add(100,200)

// ==============Nested Object===============
//const employee = {
    //fullname : 'Alina Scott',
    //age : 32,
    //address : {
        //city : "BBSR",
        //state : "Odisha",
        //PIN : "751007"
   // }
//}

//console.log(employee)


//==========Nested object task================
const employee = {
    fullname : ' swatismita parija',
    age : 22,
    address : {
        city : "BBSR",
        state : "Odisha",
        PIN : "754137"
    },
    company: {
        name : 'TCS',
        location :"Bhubaneswar",
        salary : 22000
         }
    }

    console.log(employee)
    console.log(employee.company.location)
    console.log(employee.address.city)
    console.log(employee.company.name)