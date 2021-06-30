import { useState} from "react";
// import useFetch from "./useFetch";
import axios from 'axios';
import RecipeCards from "./RecipeCards";

// const API_ID = process.env.REACT_APP_API_ID;
// const API_KEY = process.env.REACT_APP_API_KEY;
const Home = () => {
    const [Search, setSearch] = useState();
    const [Query, setQuery] = useState("pizza");
    // const [isPending, setIsPending] = useState(false);
    const [recieved, setRecieved] = useState(false);
    // const [isSearching, setIsSearching] = useState(false);
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${Query}&app_id=3b272b52&app_key=e7699c9c3cad81809317a0c20ee582bf`;

    const HandleSubmit = (e) => {
        e.preventDefault();
        setQuery(Search);
        // setIsSearching(true);
        console.log(URL);
        setRecieved(false);
        console.log(Query);
    }
    // if (isSearching === true) {
    //     setIsSearching(false);
    //     sendApiRequest();
    //     setIsPending(true);
    //     setRecieved(false);
    // }
    // async function sendApiRequest() {

    //     let apiID = process.env.REACT_APP_API_ID;
    //     let apiKey = process.env.REACT_APP_API_KEY;
    //     let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiID}&app_key=${apiKey}&q=pizza`);
    //     console.log(response);
    //     let data = await response.json();
    //     console.log(data);
    //     console.log(data.hits[0].recipe.image);
    //     setData(data);
    //     setRecieved(true);
    //     ApiDataManipulation(data);
    // }

    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then(data => setData(data));
    //         console.log(data);
    //         setRecieved(true);

    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, [Query]);
    // useEffect(() => {
    //     axios
    //         .get(URL)
    //         .then((res) => {
    //             setData(res.data.hits);
    //             console.log(data);
    //         })
    //         .catch(console.log);
    // }, [Query]);

    return (
        <div>
            <div className="searching">
                <form onSubmit={HandleSubmit}>
                    <label>Search for stuff</label>
                    <input id="search"
                        type="search"
                        placeholder="Search..."
                        required
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* <button type="submit">Go</button> */}
                    {<button type="submit">Go</button>}
                    {/* {isPending && <button disabled type="submit">Searching</button>} */}
                </form>
            </div>
            <div className="searchResults">
                {/* {recieved && <img src={data.hits[0].recipe.image}></img> } */}
                {recieved && <RecipeCards recipes={data} title={Search} />}
            </div>
        </div>

    );
}

export default Home;