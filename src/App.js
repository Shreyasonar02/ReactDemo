import './App.css';
import Greeting  from './Components/Greeting';
import FirstComponent from './Components/firstcomponent';
import SecondComponent from './Components/secondcomponment';
import { useState } from 'react';



function App() {
    const name ="shreya";

  const [counter, setCounter] = useState(0)
  const [mountFirst, First] = useState(true)
  const [mountSecond, Second] = useState(false)


  const MountEventFirst = () => {
    Second(false)
    First(true)
  }

  const MountEventsecond = () => {
    Second(true)
    First(false)
  }


  return (
    <div className='frame'>   
     <div className="App">
    
     <Greeting  name={name}></Greeting>
      
      </div>
        <h1>Count : {counter}</h1>
        <div className='button'>
          <button class='btn1' onClick={() => setCounter(counter + 1)}>Increment</button>
          <button class='btn2' onClick={() => setCounter(counter - 1)}>Decrement</button>
        
           <div className='toggle;'>
          <button onClick={MountEventFirst}> Toggle First Component</button>
          <button onClick={MountEventsecond}>Toggle  Second Component</button>
          </div>
          {mountFirst && <FirstComponent/>}
        {mountSecond && <SecondComponent/>}
        
        </div>

    
    </div>
  )
};
export default App;
