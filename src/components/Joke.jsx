import React, { useState } from 'react'
import Button from './Button'
import './style.css'

const Joke = () => {
    const [joke,setJoke]=useState({setup:"",punchline:""})
    const generatejoke= async()=>{
     const URL="https://official-joke-api.appspot.com/random_joke"
     const response= await fetch(URL)
     if(!response.ok){
        throw new Error(`HTTP Error : ${response.status}`)
     }
     const data = await response.json()
     setJoke(data)
    }
  return (
    <>
    <div id="main">
    <h1>Generate Random Joke</h1>
    <h2 id="setup">{joke.setup}</h2>
    <h3 id="punchline">{joke.punchline}</h3>
    <Button getjoke={generatejoke}/>
    </div>
     

    </>
  )
}

export default Joke
