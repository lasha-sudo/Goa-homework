import Header from "./Header";
import Ingredient from "./Ingredient";
import Instructions from "./Instructions";

function Card({recipeObject}) {
    return(
        <div>
            <Header title={recipeObject.title} image={recipeObject.image} />
            <Ingredient ingredients={recipeObject.ingredients}/>
            <Instructions instruction={recipeObject.instruction}/>

        </div>
    )
}

export default Card;