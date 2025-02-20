import { useState } from 'react'

function App() {
  const [title,subtitle] = useState("my name is anuj")

  function UpdateTitle(){
    subtitle("my name is" + Math.random())
  }
  return (
    <>
    <button onClick={UpdateTitle}>click on button </button>
    <Header title = {title}></Header>
    <Header title = "anuj"></Header>
    
    </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}


export default App