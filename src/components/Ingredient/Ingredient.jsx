const Ingredient = ({ ingredient, handleClick, buttonLabel }) => {
    return (
        <li
        style={{
          backgroundColor: ingredient.color,
          padding: "10px",
          margin: "5px",
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "12px",
          width: "400px", 
        }}
      >
     
        {ingredient.name}
        <button className="smallButton" onClick={handleClick}>
        {buttonLabel}
      </button>
     </li>
    );
};

export default Ingredient;