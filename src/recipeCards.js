// import CardMeal from "./CardMeal";
const RecipeCards = ({ data }) => {
    const finalMealList = data.length ? (
        data.map((recipe) => {
            console.log(recipe);
            console.log(recipe.recipe.image);
            return (
                <div className="Images">
                    <h1>{recipe.recipe.label}</h1>
                    <img src={recipe.recipe.image} alt="recipe_image"></img>

                </div>
            );
        })
    ) : (
        <div>
            {" "}
            <p>Meals are cooking...</p>{" "}
        </div>
    );
    return <div className="meallist">{finalMealList}</div>;
};
export default RecipeCards;