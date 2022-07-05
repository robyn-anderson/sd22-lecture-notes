import React, { useState } from 'react'
import './form.css'

function Form() {
    
    const [ typing, setTyping ] = useState('')

    const handleChange = (e) => {
        setTyping(e.target.value)
        console.log(typing)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(typing)
    }

    function fireOff(e) {
        setTyping(e.target.value)
        console.log(typing)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={typing}/>
            <input type='submit'/>
            <input type='text' onChange={fireOff} />
        </form>
    )

}

export default Form