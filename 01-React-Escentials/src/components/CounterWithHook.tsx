import { UseCounter } from "../hooks/UseCounter"



export const CounterWithHook = () => {

  const {count, increasedBy} = UseCounter(
    {
      initialValue: 1,
    }
  )

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
