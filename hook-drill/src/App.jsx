import React, { useState,useEffect } from 'react'
import './App.css'
import Count from './Count'
import SmartLampu from './SmartLampu'
import RandomAnimals from './RandomAnimals/RandomAnimals'

function App() {
  return (
    <>
      <Count/>
      <SmartLampu/>
      <RandomAnimals/>
    </>
  )
}

export default App
