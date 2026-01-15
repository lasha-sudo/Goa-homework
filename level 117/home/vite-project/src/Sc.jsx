

function Sc(props) {

    function Science() {

        alert(`${props.quiz} added on list`)
    }

    return(
        <button onClick={Science}>
            {props.quiz}
        </button>
    )
}

export default Sc;