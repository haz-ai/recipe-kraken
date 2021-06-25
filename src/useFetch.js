import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //     const abortCont = new AbortController();

        //     setTimeout(() => {
        //       fetch(url, { signal: abortCont.signal })
        //       .then(res => res.json())
        //       .then(data => {
        //         setIsPending(false);
        //         setData(data);
        //         setError(null);
        //         console.log(data);
        //       })
        //       .catch(err => {
        //         if (err.name === 'AbortError') {
        //           console.log('fetch aborted')
        //         } else {
        //           // auto catches network / connection error
        //           setIsPending(false);
        //           setError(err.message);
        //         }
        //       })
        //     }, 1000);

        //     // abort the fetch
        //     return () => abortCont.abort();
        //   }, [url])
        const fetchData = async () => {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux',
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    return { data, isPending, error };
}

export default useFetch;