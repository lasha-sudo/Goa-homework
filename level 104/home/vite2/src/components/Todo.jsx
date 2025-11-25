
export default function Todo(props) {
    return(
        <div>
            <h1>{props.data}:{props.children}</h1>
        </div>
    )
}