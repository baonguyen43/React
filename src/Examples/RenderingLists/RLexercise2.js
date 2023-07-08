import React from "react";

const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

function RLexercise2() {
  return (
    <div>
      <h1> Recipes </h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2> {recipe.name}</h2>
          {recipe.ingredients.map((ingredient) => (
            <ul>
              <li key={ingredient}>{ingredient}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RLexercise2;
