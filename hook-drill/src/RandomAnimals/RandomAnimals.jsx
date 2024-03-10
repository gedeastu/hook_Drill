import React, {useState} from 'react'
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
    const animals = ['bird','cat','cow','dog','gator','heart','horse']
    return animals[Math.floor(Math.random() * animals.length)]
}

function RandomAnimals() {
  const [animals,setAnimals] = useState([])
  const handleClick = () => {
    setAnimals(
        (previous)=>([
            ...previous,
            getRandomAnimal()
        ])
    )
  }
  
  const renderedAnimals = animals.map((value,index)=>{
    return <AnimalShow type={value} key={index}/>
  })

  return (
    <>
    <div>
        <button onClick={handleClick}>Click me</button>
        <ul>
          {renderedAnimals}
        </ul>
    </div>
    </>
  )
}

export default RandomAnimals