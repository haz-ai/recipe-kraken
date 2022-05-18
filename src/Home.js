import { useState } from 'react'
import RecipeCards from './recipeCards'
import useFetch from './useFetch'

// const API_ID = process.env.REACT_APP_API_ID;
// const API_KEY = process.env.REACT_APP_API_KEY;
const Home = () => {
  const [Search, setSearch] = useState()
  let Query = null
  const [URL, setURL] = useState('')

  const HandleSubmit = (e) => {
    e.preventDefault()
    Query = Search
    setURL('https://api.edamam.com/api/recipes/v2?type=public&q=' + Query + '&app_id=3b272b52&app_key=e7699c9c3cad81809317a0c20ee582bf')
    console.log(URL)
    console.log(Query)
    console.log(data)
    localStorage.removeItem(data)
  }
  const { data } = useFetch(URL)
  return (
    <div>
      <div className='searching'>
        <form onSubmit={HandleSubmit}>
          <label>Search for stuff</label>
          <input
            id='search'
            type='search'
            placeholder='Search...'
            required
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>Go</button>
        </form>
      </div>
      {/* {Where recipes end up their is no div since recipe cards inserts a section for it} */}
      {/* {recieved && <img src={data.hits[0].recipe.image}></img> } */}
      {data && <RecipeCards data={data} />}
      {/* <div className='MoreButton'>
                {data && <button onClick={HandleSubmit}>Load More</button>}
            </div> */}
    </div>
  )
}
export default Home
