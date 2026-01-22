// best example to understand useState vs useRef


import { useState, useRef } from "react";

export default function Timer() {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    // console.log("refcount:", refCount);

    console.log("Component Rendered");

    const handleStateClick = () => {
        debugger
        setStateCount(stateCount + 1); // re-render karata hai
    };

    const handleRefClick = () => {
        refCount.current += 1; // re-render nahi hoga
        console.log("Ref Count (updated):", refCount.current);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>useState vs useRef Demo</h2>

            <div style={{ marginBottom: "20px" }}>
                <h3>State Counter</h3>
                <p>Count (state): {stateCount}</p>
                <button onClick={handleStateClick} className="bg-blue-500 text-white px-3 py-1 rounded">Increment with State</button>
            </div>

            <div>
                <h3>Ref Counter</h3>
                <p>Count (ref): {refCount.current}</p>
                <button onClick={handleRefClick} className="bg-green-500 text-white px-3 py-1 rounded">Increment with Ref</button>
            </div>
        </div>
    );
}
