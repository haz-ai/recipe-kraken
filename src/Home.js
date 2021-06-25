import { useState } from "react";
// import useFetch from "./useFetch";
// import axios from 'axios';
const Home = () => {
    const [Search, setSearch] = useState();
    const [isPending, setIsPending] = useState(false);
    const [recieved, setRecieved] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    // const baseURL = "https://api.edamam.com/api/recipes/v2?type=public&q=";
    const HandleSubmit = (e) => {
        e.preventDefault();
        setIsSearching(true);
    }
    const [data, setData] = useState({ hits: [] });
    if (isSearching === true) {
        setIsSearching(false);
        sendApiRequest();
        setIsPending(true);
        setRecieved(false);
    }
    async function sendApiRequest() {

        let apiID = process.env.REACT_APP_API_ID;
        let apiKey = process.env.REACT_APP_API_KEY;
        let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiID}&app_key=${apiKey}&q=pizza`);
        console.log(response);
        let data = await response.json();
        console.log(data);
        console.log(data.hits[0].recipe.image);
        setData(data);
        setRecieved(true);
        // ApiDataManipulation(data);
    }
    // function ApiDataManipulation(data) {
    //     let recipeImage = data.hits[0].recipe.image;
    //     document.querySelector("#searchResults").innerHTML = `
    // }

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
                    {!isPending && <button type="submit">Go</button>}
                    {isPending && <button disabled type="submit">Searching</button>}
                </form>
            </div>
            <div className="searchResults">
                {/* {recieved && <img src={data.hits[0].recipe.image}></img> } */}
                {data && <recipeCards recipes={data} title={search} />}
            </div>
        </div>

    );
}

export default Home;