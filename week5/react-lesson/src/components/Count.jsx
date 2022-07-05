import React, {useState} from 'react'
import './count.css'

const Counter = (props) => {

    // variable function to change value
    const[ count, setCount ] = useState(0)

    function decrementCount() {
        setCount(count - 1) // 'count--' does not work, has to be 'count - 1'
        setCount(prevCount => prevCount - 1) // this causes the function to decrement by 2 instead of by 1 because it is able to access 

    }

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <>
        <div className='counter-container'>
            <button onClick={decrementCount}>-</button> {/* onClick is an eventListener */}
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
        </>
    )
}

export default Counter