import CardMeal from "./CardMeal";
const RecipeCards = ({ data, title }) => {
    data.map((recipe) => {
        return (
            <CardMeal
                image={recipe.recipe.image}
                name={recipe.recipe.label}
                link={recipe.recipe.url}
                ingredients={recipe.recipe.ingredientLines}
            />
        );
    });
};
export default RecipeCards;