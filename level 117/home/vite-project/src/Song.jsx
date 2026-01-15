


function Song(props) {

    function HandleClick() {
        alert(`${props.music} is your choice`)
    }

    return(
        <button onClick={HandleClick}>
            {props.music}
        </button>
    )
}

export default Song;