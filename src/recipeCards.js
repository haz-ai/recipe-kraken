import './RecipeCards.css';
const RecipeCards = ({ data }) => {
    const finalMealList = data.length ? (
        data.map((recipe) => {
            return (
                <div className="RecipeCard" key={recipe.recipe.label.toString()}>
                    {console.log(recipe)}
                    <div className="header">
                        <h1>{recipe.recipe.label}</h1>
                    </div>
                    <img src={recipe.recipe.image} alt="recipe_image"></img>
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