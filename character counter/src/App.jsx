import { useState } from 'react'
import { Form, Footer, Header } from "./components";

function App() {
  const [count, setCount] = useState(0)

  const handleOnChange = ({target}) => {
    setCount(target.value.length)
  }
  return (
    <>
    <Header />
    <Form
    onChangeCharacter={handleOnChange}
     />
    <Footer 
    counter={count}
     />
    </>
  )
}

export default App
