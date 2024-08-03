import { useState } from "react";
// 5. BUTTON COUNTER UPDATE SEPARATELY
function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

export default function MyApp() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(1 + count);
    }
    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}