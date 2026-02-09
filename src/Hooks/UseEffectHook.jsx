import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [counter, updateCounter] = useState(0);

    useEffect(() => {
        console.log(counter);
    }, [counter]); // <-- add counter here

    return (
        <div>
            You clicked {counter} times{" "}
            <button onClick={() => updateCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default UseEffectHook;
