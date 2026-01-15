

function Film(props) {

    function Pick() {
        alert(`${props.movie} is avalaible`)
    }


    return(
        <button onClick={Pick}>
            {props.movie}
        </button>
    )
}

export default Film;