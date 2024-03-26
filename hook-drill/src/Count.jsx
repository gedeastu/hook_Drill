import React, { useState,useEffect } from 'react'
import './App.css'

function Count() {
  const [count,setCount] = useState(0)
  const [desc,setDesc] = useState("")
   //lifecycle reactm, if with [] empty array, the console will once time render on console, 
  //even when launch the web the value still rendered
  useEffect(()=>{
    if(count != 10){
       setDesc(`Tambahkan Data sebanyak ${count}`)
    }else{
        setDesc(`Limit Data sebanyak ${count}`)
    }
  },[count])


  //and if [] array is has value from state or anywhere, 
  //the console will render while the action is triggered
    useEffect(()=>{
      console.log(count)
    },[count])
  return (
    <>
    <h1>{desc}</h1>

    <button onClick={()=>{
      setCount((previous)=>(previous != 10) ? previous+1:previous)
      //console.log(count)
    }}>+</button>
    <button onClick={()=>{
      setCount((previous)=>(previous != 0) ? previous-1:previous)
      }}>-</button>
      <br />
      <br />
    </>
  )
}

export default Count