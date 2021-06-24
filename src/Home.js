import { useState } from "react";
const Home = () => {
    const [search, setSearch] = useState('Search');
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
    }

    return (
        <div>
            <div className="searching">
                <form onSubmit={handleSubmit}>
                    <label for="search">Search for stuff</label>
                    <input id="search"
                        type="search"
                        placeholder="Search..."
                        autofocus
                        required
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* <button type="submit">Go</button> */}
                    {!isPending && <button type="submit">Go</button>}
                    {isPending && <button disabled type="submit">Searching</button>}
                </form>
            </div>
            <div>
                <p className="Center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex natus, quasi debitis omnis aliquam vitae maiores placeat voluptatem amet at quas tempore nostrum vel nihil magni doloremque perferendis laboriosam vero?
                </p>
            </div>
        </div>

    );
}

export default Home;