import { useState, useEffect } from 'react'
import axios from 'axios'
const useFetch = (url) => {
  // Could also be put into the main body
  const [data, setData] = useState('')
  const [more, setMore] = useState('')

  useEffect(() => {
    setData('')
    axios
      .get(url)
      .then((res) => {
        setData(res.data.hits)
        setMore(res._links)
      })
      .catch(console.log)
  }, [url]) // since url is a dependance it will rerun to get the url and new data
  return { data, more }
}
export default useFetch
