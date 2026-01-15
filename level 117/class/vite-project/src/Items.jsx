


function Items(props) {


    return(
        <div>
            <button onClick={props.onclick}>{props.first}</button>
            <button onClick={props.onclick}>{props.second}</button>
            <button onClick={props.onclick}>{props.third}</button>
            <button onClick={props.onclick}>{props.fourth}</button>

        </div>
    )
}

export default Items;