import { useState } from 'react'
import { Form, Footer, Header } from "./components";

function App() {
  const [count, setCount] = useState(0)

  const handleOnChange = ({target}) => {
    setCount(target.value.length)
  }
  return (
    <>
    <h1>Character counter</h1>
    <form onChange={handleOnChange}>
      <textarea placeholder='write some text..'></textarea>
    </form>
    <h3>Your character counter : {count} </h3>
    </>
  )
}

export default App
