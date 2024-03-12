import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{
            border: '1px solid yellow',
            borderRadius: '25px',
            margin: '20px',
            padding: '20px',
        }}>
            <h3>Counter : {count} </h3>
            <button onClick={() => setCount(count + 1)}>add</button>
            <button onClick={()=>setCount(count-1)}>reduce</button>
        </div>
    )
}