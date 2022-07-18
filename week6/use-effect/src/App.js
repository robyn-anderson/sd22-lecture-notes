import React, {useState, useEffect} from 'react'
import './App.css';

/*
  Use Effect:
  
  Performs side effects in fx components

    * useEffect is used to setup what React refers to as 'side effects' 
    
  These are operations which fall outside the normal React render cycle, such as:
      * direct manipulation of the window objects
      * fetching data
      * setting up event listeners
      * performing cleanup tasks
    
    Set up:
      * import useEffect
      * call useEffect function within the component
      * create the fetch using .then resolvers or an async await function
      * assign the return of the data toa  state variable
      * assign the dependency parameter to either run once [] or when a particular state variable updates [stateVarToUpdate]
      * return a render of the data however you want to use it
    
    useEffect(callback, dependencies)
    Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().
      * callback is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.

      * dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
          * not provided: the side-effect runs after every rendering
          * an empty array []: will run the side-effect once after initial rendering
            useEffect (() => {
                  document.title = `you clicked ${count} times`;
                }, [])
          * Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes

*/

function App() {

  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate
  useEffect (() => {
    // Update the document title (text on the browser tab)
    document.title = `you clicked ${count} times`;
  }, [count])
  

  const [capsules, setCapsules] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.spacexdata.com/v3/capsules/past')
        const data = await res.json()
        setCapsules(data)
      }
      catch(err) {
        return `Something went wrong: ${err}`
      }
    }
    fetchData()
  }, [])

  return (
    <> 

      
    <p> Clicked {count} times.</p>
    <button onClick={() => setCount(count + 1)}>+</button>
  
    {capsules.length > 0 ? capsules.map(capsule => {
      return (
        <h1>{capsule.details}</h1>
      )
    }) : <h1>Something went wrong</h1>}
    </>
  );
}

export default App;
