

export default function Product(props) {
    return(
        <div>
        <h1>{props.data}:{props.children}</h1>
        <h1>available:yes</h1>
        </div>
    )
}