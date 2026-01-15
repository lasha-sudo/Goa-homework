

function Workout(props) {

    function wk() {

        alert(`${props.work} added on list`)
    }

    return(
        <button onClick={wk}>
            {props.work}
        </button>
    )
}

export default Workout;