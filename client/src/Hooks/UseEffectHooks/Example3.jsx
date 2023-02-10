import React,{useEffect, useState} from 'react'

export default function Example3() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count+1)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <React.Fragment>
            <div>
                The Count is {count}
            </div>
        </React.Fragment>
    )
}
