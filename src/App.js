import { useState } from "react";
// 4. BUTTON COUNTER UPDATE TOGETHER
function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(1 + count);
    }
    return (
        <button onClick={handleClick}>
            Click {count} times
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}