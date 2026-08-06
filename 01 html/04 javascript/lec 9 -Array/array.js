//const s1 = "Amit"
//const s2 = "Ankit"
//const s3 = "Asit"

////const stds = ["Amit","Ankit","Asit"]
//console.log(stds)

//console.log(stds[0])
//console.log(stds[1])
//console.log(stds[2])

//for (let i=0; i<stds.length; i++){
    //console.log(stds[i])

//}

//console.log(stds[4]) // undefined

//stds[10] ="seema" //empty till 9


//========Array Methods=======
// const fruits = ["Apple", "Banana", "Mango", "Orange"];

//fruits.push("Orange","cherry") //add new elements at the end of array
//console.log(fruits)

//fruits.pop() // remove last element  from the array
//console.log(fruits)

//fruits.unshift("cherry") // add new elements at the begining of array
//console.log(fruits)

//fruits.shift() // remove first element from the array
//console.log(fruits)

//console.log(fruits.includes("Apple"))
//console.log(fruits.includes("Apple",2)) // search for elements from index 2

//console.log(fruits.indexOf("Apple")) //0
//console.log(fruits.indexOf("Apple",2)) //-1 // return index of element from index 2

// step 1=> check mango
//if(fruits.includes("Mango")){
// step 2=> if exist then extracts the index
//const idx = fruits.indexOf("Mango")

//step 3 => then update the value in the index
//fruits[idx] = "kiwi"
//console.log(fruits)
//}else {
  //step 4 => if not exists then do nothing  
  //alert("search element is not present")
//}

//fruits.push("Mango","Orange")
//console.log(fruits)
//console.log("last index of mango", fruits.lastIndexOf("Mango"))

//console.log(fruits.slice(0,3)) //return new array from index 0 to 2
//console.log(fruits.slice(1,3))//return new array from index 1 to 2
//console.log(fruits.slice(2))//return new array from index 2 to 3
//console.log(fruits.slice())//return new array from index 2 to end of array


//fruits.splice(2, 3)  // remove two elements from index 1
//console.log("After splice",fruits)

//["Apple", "Banana", "Mango", "Orange", "Mango","Orange"];
//fruits.splice(2, 3,"Cheery")  // add two elements at index 1
//console.log("After splice2", fruits)


//const number = [10, 20, 30]
//const fruitsWithNumbers =  fruits.concat(number)// combine two arrays
//console.log("fruits with numbers", fruitsWithNumbers)


//const fruitsString = fruits.join('-') // convert array to string
//console.log( fruitsString)

//fruits.reverse()
//console.log("After reverse", fruits)

//fruits.push(57, 21, 31, 100)
//fruits.sort() // sort array in ascending order
//console.log("After sort", fruits)

//const arr = [10, 20, 30]
//arr.sort((a, b) => a - b)// ascending order
//arr.sort((a, b) => b - a)// decending order
//console.log(arr)

//const arr1 = [10, 20, 30, 5]
//arr1.sort(xyz) 
//console.log(arr1)

//write the arguments outside of the function and pass them to the function
//function xyz(a, b) {
  //return a-b
//}







  