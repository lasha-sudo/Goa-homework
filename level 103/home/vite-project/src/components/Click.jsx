import "./Click.css"

export default function Click(props) {
    console.log(props)
    

    return (
        <div>
            {props.data}
            <h1>click</h1>
        </div> 
     
    )
    
}