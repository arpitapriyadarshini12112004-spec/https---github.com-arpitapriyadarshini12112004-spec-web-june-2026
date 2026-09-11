import React , {useState} from 'react'
import Greet from './Greet'
import Xyz from './Xyz';


const App = () => {
  console.log("App Component");
  
  const [name, setName] = useState("Ram")
  const [showGreet, setShowGreet] = useState(true)

  const handleClick = (e) => {
    setName(name + 1)
  }
  return (
    
    <div className='bg-green' style ={{border:'2px spolid black', padding:'20px'}}>
   <p>Parent Component state:- {name} </p>

   <button onClick={(e)=> setShowGreet(!showGreet)}>
    {showGreet ? 'Hide' :"Show"} Greet
    </button>

    {/* {
    showGreet == true ? "Greet is visible" : "Greet is hidden"
   } */}
   
   {/* {
    showGreet  ? <Greet name ={name} /> : ""
   }
    */}

    {
      showGreet && <Greet name={name} />
    }
    <Xyz/>

<button onClick = {handleClick}> Click Here</button>

    </div>
  )
}


export default App
//Diff betn state and prop
// state is just like a local variable which is created inside the componenet while prop is a object which is passed to an  
// component when the component was called.
//state is managed by the component itself where props is being passed from parent component to child component.