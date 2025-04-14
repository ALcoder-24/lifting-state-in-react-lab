import Ingredient from "../Ingredient/Ingredient.jsx"

const IngredientList = ({availableIngredients, addToBurger }) => {
    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {availableIngredients.map((ingredient, index) => (
            <Ingredient
                key={index}
                ingredient={ingredient}
                handleClick={() => addToBurger(ingredient)}
               buttonLabel="+"
              />
            ))}
            </ul>
        </div>
    );
   
  };
  
  export default IngredientList;
  