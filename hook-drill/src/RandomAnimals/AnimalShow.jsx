import React, { useState } from 'react'
import bird from '../assets/bird.svg'
import cat from '../assets/cat.svg'
import cow from '../assets/cow.svg'
import dog from '../assets/dog.svg'
import gator from '../assets/gator.svg'
import horse from '../assets/horse.svg'
import heart from '../assets/heart.svg'

const icons = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};


export default function AnimalShow({type}) {

  const [like,setLike] = useState(false)

  const handleLike = () => {
    setLike(
        (previous) => previous = !previous
    )
  }

  return (
    <>
    <li>
    <img src={
        icons[type]
    } alt="" width={"100px"}/>
    <button onClick={handleLike}>
        <img src={heart} alt="" width={(like) ? "100px" : "50px"}/>
    </button>
    </li>
    </>
  )
}
