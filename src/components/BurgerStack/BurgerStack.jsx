import Ingredient from "../Ingredient/Ingredient.jsx";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger</h2>

      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (

      <ul>
        {stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            handleClick={() => removeFromBurger(index)}
            buttonLabel="X"
          />
        ))}
      </ul>
       )}
    </div>
  );
};

export default BurgerStack;
