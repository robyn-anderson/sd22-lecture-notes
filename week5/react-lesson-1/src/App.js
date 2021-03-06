import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Counter from './components/Count';
import { useState } from 'react'
import Form from './components/Form';
import Auth from './components/Auth';

function App() { // This is a functional component or a hook. The function name - App - is capitalized because it is a COMPONENT
  
  const [ names, setNames ] = useState(['Lucy', 'Olive', 'Oscar'])

  const Button = () => { // Typically this would be in its own file/folder in the components folder. Just for this lesson, putting things in here.
    return (
      <button>Click</button>
    )
  }

  const [ className, setClassName ] = useState('class-name')
  const [ name, setName ] = useState('a name')


  return ( // can only have one fragment (conatiner (<> <\>))
    <> {/* This could be a div, but unless a div is needed here, better to use a fragment instead */}
    Hello World from React

    {/* component mounting below: */}
    <Auth />


    <Button />
    <Welcome className={className} name='Lucy'/> 
    {/*         ^prop                ^prop
    'className' & 'name' are 'props' (properties)
    properties can only be passed parent to child 
      * (App.js is the parent 
      * components/Welcome.js is the child)
    */}
    <Welcome name='Olive'/>
    <Welcome name={name}/>
    <Counter />
    <Form />
    {/* { names ? <Auth /> : null}  Is an example of conditionally mounting a component - Auth will only print if the names array has content */}

    {/* Using props & functions with the Welcome component */}
    {names.map(oneName => {
      return <Welcome oneName={oneName} updateName={setNames} allNames={names}/>
    })} {/* for every item in the array, make Welcome run */}
    </>
  
  );
}

export default App;
