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

    function removeFromNames() {
      console.log(props.oneName)
         const updatedNames = props.allNames.filter(oneName => oneName !== props.oneName)
         props.updateName(updatedNames)
          // props.updateName([]) // Empties the names array when the dive (see below in return) is clicked
    }
  
  return (
    <div onClick={removeFromNames}>

      <h1>Hello, {props.oneName}</h1>
      <h2 className={props.className}>Hello, {props.name}</h2>

    </div>
  )
}

export default Welcome