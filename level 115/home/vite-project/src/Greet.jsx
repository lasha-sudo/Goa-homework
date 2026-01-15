

function Greet(props) {

    return(
        <div>
            <h1>hello {props.name}</h1>
            <p>{props.message}</p>
            <p>my age is {props.age}</p>
        </div>
    )
}

export default Greet;