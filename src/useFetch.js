import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
    //Could also be put into the main body
    const [data, setData] = useState("");

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data.hits);
            })
            .catch(console.log);
        
    }, [url]); // since url is a dependance it will rerun to get the url and new data
    return { data }
}
export default useFetch;