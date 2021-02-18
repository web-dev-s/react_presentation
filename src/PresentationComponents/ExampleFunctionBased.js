import React, { useEffect, useState } from 'react';

function MyComponent() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const loadAsyncData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const resp = await fetch('https://...').then(r => r.json());
            setData(resp);
            setIsLoading(false);
        } catch (e) {
            setError(e);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        loadAsyncData();
    }, []);

    if (isLoading) return (<p>Loading...</p>);
    if (error) return (<p>Something went wrong</p>);
    if (data) return (<p>The data is: {data}</p>);
    return (<p>No data yet</p>);
}
export default MyComponent;