import './RecipeCards.css';
const RecipeCards = ({ data }) => {
    const finalMealList = data.length ? (
        data.map((recipe) => {
            return (
                <div className="RecipeCard" key={recipe.recipe.label.toString()}>
                    {/* {console.log(recipe)} */}
                    {/* {for testing and finding variables} */}
                    <div className="header">
                        <h1>{recipe.recipe.label}</h1>
                    </div>
                    <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer"><img src={recipe.recipe.image} alt="recipe_image"></img></a>
                </div>
            );
        })
    ) : (
        <div>
            {" "}
            <p>Recipies are cooking...</p>{" "}
        </div>
    );
    return <section className="RecipeGrid">{finalMealList}</section>;
};
export default RecipeCards;