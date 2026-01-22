import { useEffect, useRef, useState } from "react";

export default function First() {

    const [count, setCount] = useState(0);
    const prevRef = useRef(null)

    console.log("compoenent render");

    useEffect(() => {
        prevRef.current = count;
    }, [count])

    return (
        <>
            <button className="bg-blue-500" onClick={() => setCount(c => c + 1)}>Increment</button>
            <h1>Count:{count}</h1>
            <h1>Previous:{prevRef.current}</h1>
        </>
    )

}