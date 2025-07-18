
import React from "react";
import ClaudeRepice from "./ClaudeRecipe";
import IngredientsList from "./IngredientsLIst";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai"
//import { useState } from "react";


function Main() {

    
    const [ingredients , setingredients]= React.useState(["eggs", "milk", "flour"]);
    let [recipeShown, setrecipeShown]= React.useState(false);

    // ToDo : Make the window scroll to the recipe when it is generated
    const recipeRef = React.useRef(null);
    React.useEffect(() => {
        console.log('Recipe ref updated:', recipeRef.current);      
    }, [recipeShown]);    
    //console.log(recipeRef)

    const ingredientsList = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>});   

    function submitForm(FormData) { 
        const ingredient = FormData.get('ingredient'); 
        setingredients(prevIngredients => [...prevIngredients, ingredient]);
    }   
    
    async function handleGetRecipe() {
        const recipe = await getRecipeFromMistral(ingredients);
        setrecipeShown (prevrecipeShown => {return recipe})
        //getRecipeFromMistral(ingredients)
        //console.log(getRecipeFromMistral(ingredients))
    }
  return (
      <main>
            <form action={submitForm} className="recipe-form" > 
                <input type="text" placeholder="Enter your recipe here..."
                name="ingredient" />
                <button type="submit" > + Add ingredients</button>
            </form>
       
            { ingredientsList.length > 0 && <IngredientsList ingredientsList = {ingredientsList} setrecipeShown = {handleGetRecipe} ref = {recipeRef}/> }
            { recipeShown ? <ClaudeRepice  recipe = {recipeShown}/> : null}        
    </main>
        
  );
}
export default Main;