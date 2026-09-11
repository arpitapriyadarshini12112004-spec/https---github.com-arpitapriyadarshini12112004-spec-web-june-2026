import React , {useState} from 'react'
import Greet from './Greet'
import Hello from './Hello'


const App = () => {
  console.log("App Component");
  
  const [name, setName] = useState("Ram")
  // conditional rendering

  const handleClick = (e) => {
    setName(name + 1)
  }
  return (
    
    <div style ={{border:'2px spolid black', padding:'20px'}}>
   <p>Parent Component state {name} </p>
   {/* <Greet name={name}/> */}
      <Greet name={name} children='i am a child component' >
       {/* Hello Everyone
       <strong>Hii</strong>
       <Hello/> */}
       </Greet>

<button onClick = {handleClick}> Click Here</button>

    </div>
  )
}


export default App
//Diff betn state and prop
// state is just like a local variable which is created inside the componenet while prop is a object which is passed to an  
// component when the component was called.
//state is managed by the component itself where props is being passed from parent component to child component.