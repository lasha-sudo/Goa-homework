import { useState } from "react";



function Counter(props) {

    const [num,setNum] = useState(0)

    function count() {
        setNum(num+1)

      
    }
    function alt() {
        alert(num)
    }



    return(
        <div>
            
            <button onClick={count}>{props.btn}</button>
            <button onClick={alt}>see what you on</button>
            



        </div>
    )
}


export default Counter;