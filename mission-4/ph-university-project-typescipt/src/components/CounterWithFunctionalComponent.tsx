import { useState } from "react"

const CounterWithFunctionalComponent = () => {
    const [count, setCount] = useState(0)
  return (
    <button className="btn border-2 border-black p-4" onClick={()=> setCount((prev)=> prev + 1)}>
       {count} 
    </button>
  )
}

export default CounterWithFunctionalComponent
