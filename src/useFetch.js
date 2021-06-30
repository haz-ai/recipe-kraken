import { useState, useEffect } from "react";
const useFetch = (url) => {
    //Could also be put into the main body
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(URL)
            .then((res) => {
                setData(res.data.hits);
                console.log(data);
            })
            .catch(console.log);
    }, [url]);
    return{data}
}
export default useFetch;