import React from 'react'
// import "./App.css"
import styles from "./Xyz.module.css"

const Xyz = () => {
    console.log("styles inside Xyz", Xyz);
    
  return (
    <>
    <div>Xyz</div>
    {/* <p  className='bg-green'>asfhgyffg</p> */}
    <p className={ `${styles.textYellow} $ {styles['bg-green']}`}>asfhgyffg</p>
    </>
    
  )
}

export default Xyz