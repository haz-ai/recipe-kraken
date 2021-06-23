import { useState } from "react";
const Home = () => {
    const [search, setSearch] = useState('');
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search:</label>
                <input
                    type="text"
                    required
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {!isPending && <button>Search</button>}
                {isPending && <button disabled>Searching web....</button>}
            </form>
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
    );
}

export default Home;