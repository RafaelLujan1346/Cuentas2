import { useState } from 'react'
import './App.css'
import ItemComponent from './components/itemComponent' 
import Button from 'react-bootstrap/Button';
 
function App() {

  var x =0
  let[contador,setContador] = useState(10)
  let [arr, setArr]=useState([])
  let clickBotton =()=>{
    setContador(contador+1)
    console.log(contador)
    let x=([...arr,contador])
    setArr(x)
  }
  return (
    <>
    <h1>contador</h1>
    <Button variant="dark">Dark</Button>
    <p> {contador}   </p>
    <button onClick={clickBotton} >Aumentar</button>
    {arr.map((item)=>( <ItemComponent key={item}/>))}
   
    </>
  )
}

export default App
