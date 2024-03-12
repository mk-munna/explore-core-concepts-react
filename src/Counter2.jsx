import { useState } from "react";

export default function () {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>New Count</h3>
            <p>Count : {count}</p>
            <button onClick={() => setCount(prevState => prevState - 1)}>remove</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>add</button>
        </div>
    )
}