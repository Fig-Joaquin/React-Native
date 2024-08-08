import { useState } from "react"


export const Counter = () => {

  const [count, setCount] = useState<number>(0)

  const increasedBy = (value: number) => {
    setCount(count + value)
  }

  return (
    <>
      <h3>Contador <small> {count} </small></h3>
      <div>
        <button className="btn btn-primary" onClick={() => increasedBy(+1)}>+1</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={() => increasedBy(-1)}>-1</button>
      </div>
    </>
  )
}
