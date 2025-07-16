import React from "react";

export default function IngredientsList(props) {

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{props.ingredientsList}</ul>

            {props.ingredientsList.length >= 3 &&
                <div className="get-recipe-container">
                    <div ref = {props.recipeRef} className="get-recipe-text">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    <button onClick={() => props.setrecipeShown()}>Get a recipe</button>

                </div>}
        </section>
    )
}