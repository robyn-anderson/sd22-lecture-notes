import React, {useState} from 'react' // Import all the dependencies needed for this to work

const Welcome = (props) => { 

   // const [ myName, setMyName ] = useState(undefined)

  // This is what is happening in the background when using 'set':
  /*
    function useState(startingData) {
      function updateState(newData) {
        startingData = newData
      }
      return [startingData, updateState]
    }
    */

    //if (myName === undefined) {
      //setMyName('Nick')
    //}
  
  
  return (
    <>

      <h1 className={props.className}>Hello, {props.name}</h1>

    </>
  )
}

export default Welcome