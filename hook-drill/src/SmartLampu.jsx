import React, { useState,useEffect } from 'react'

function SmartLampu() {
//initial value
const [status,setStatus] = useState(0)
const [desc,setDesc] = useState("")

useEffect(()=>{
    if (status % 2 == 0) {
        setDesc("Mati")
    } else {
        setDesc("Hidup")
    }
},[status])

  return (
    <>
    <h1>{desc}</h1>
    <button onClick={()=>{setStatus((previous)=>previous+1)}}>Click</button>
    </>
  )
} 

export default SmartLampu