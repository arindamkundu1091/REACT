import React, { useEffect, useState } from 'react'

export default function Problem1() {

    const [title, setTitle] = useState('REACT');
    
    // document.title = title;

    useEffect(() => {
        document.title = title;
    }, [title])
    
    const updateTitle = (e) => {
        let input = e.target.value
        setTitle(input);
    }
    
    return (
        <React.Fragment>
            <input className='my-2' type="text" placeholder='Enter Title...' onChange={updateTitle}/>
        </React.Fragment>
    )
}
