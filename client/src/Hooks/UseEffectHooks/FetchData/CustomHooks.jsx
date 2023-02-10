import React, { useEffect, useState } from 'react'

export default function CustomHooks(url) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
                .then((data) => setData(data))
                    .catch((err) => console.log(`Error: ${err}`));
    }, [url]);

    return {data}
}
