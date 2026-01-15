



function Ingredient({ingredients}) {
    return(
        <div>
            
            <ul>
                { ingredients.map( (ing , i)=> <li key={i}>{ing}</li>)}
            </ul>

            

        </div>
    )
}

export default Ingredient;