import { useEffect, useState } from "react";

function Effect() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("Effect:", count);
    // }, [count]);

    console.log("Render:", count);

    setCount(1);
    setCount(2);

    return null;
}


export default Effect;