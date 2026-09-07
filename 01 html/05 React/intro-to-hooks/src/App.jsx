import { useState } from "react";


function App() {
  // console.log("App Component");
  
  // let count= 0
  const state= useState(12)  // [initial value, setState function] <-state <- useState(initial value)
  // console.log("/////", state);
  // console.log("/////", state[0]);
  // console.log("/////", state[1]);
  const [count, setCount]= state
          console.log("App Component", count);

 function increment() {
    // count++;
    // console.log("increasing count", count);
        // state[0]++;
        // state[1](state[0]++)
                // console.log("increasing state", state[0]);
        //    setCount(count+1)
        // console.log("increasing state", count);
        //    setCount(count+2)
        // console.log("increasing state", count);
        //  setCount(count + 1)
        //   setCount(count + 1)
        //   setCount(count + 1)
      //   setCount((prevState) => {
      //  console.log("prevstate:- 1 is", prevState);
      //  console.log("count:-1 is",count);
      //  return prevState + 1
      //   })
      //   setCount((prevState) => {
      //  console.log("prevstate:- 2 is", prevState);
      //  console.log("count:-2 is",count);
      //  return prevState + 1
      //   })
      //   setCount((prevState) => {
      //  console.log("prevstate:- 3 is", prevState);
      //  console.log("count:-3 is",count);
      //  return prevState + 1
      //   })

        //  console.log("increasing state", count);

        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
          }

        const decrease = () => {
          setCount(count ==0 ? 0 : count-1 )
          // If the state is reassigned with the same value then the component won't be re-render
          // eg: if the state value is 0 and we try to re-assign 0 again then the component won't be rendered due to React 
          //intelligence. On the other hand if we assign any other value instead of 0 React will be re-render the component.
        }

  return (
    <div style={{ textAlign: 'center'}}>
      <h1>Counter App</h1>
      <br /> <br />
      {/* <button onClick ={increment}>Increase by 2</button>
      <br /> <br /> */}

      <button onClick={increment}>Increase</button>
       <br /> <br />
       <button>{count}</button>
       <br /> <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App
