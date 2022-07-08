/* 
    useNavigate allows us to render another component from another route without a full-page re-render. 

    useNavigate used to be called useHistory (v.5) 

    Setup:
        
          * Step 1: 
          import { useNavigate } from 'react-router-dom'
          
          * Step 2: 
          assign useNavigate() METHOD to a VARIABLE (EX: let navigate = useNavigate() )

          * STEP 3: 
          use "navigate('/endpoint')" to specify where you need to go

          * Step 4: 
          navigate () must be used in a callback fx inside an event (onClick, onChange ,etc.) 
  */


import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AboutMe() {

  let navigate = useNavigate()
  let { username } = useParams()

  return (
    <div>
      <h1>This AboutMe component is rendered using /about route. It talks about {username}.</h1>
      

      <button onClick={ () => {navigate('/')} }>Go to Home</button>
    </div>
  )
}

export default AboutMe