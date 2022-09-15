import React,{useState} from 'react'

const Counter = () => {
  const [count, setcount] = useState(0)
  return (
    <section className="counter h-100 mt-5 mb-5 d-flex justify-content-center" id="counter">
        <div className="container">
          <h1>Using Function Componenet</h1>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={()=>setcount(prev=>prev-1)}>-</button>
          </div>
          <div className="col">
            <input type="number" name="counter-num" id="counter" value={count} disabled/>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={()=>setcount(prev=>prev+1)}>+</button>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Counter