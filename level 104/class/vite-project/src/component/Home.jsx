import "./Home.css"
import History from "./History";

export default function Home(props) {
    console.log(props);
    console.log(props.data)

    const handleclik = () => {
        props.setcount((curr) => curr + 1)
    }
    const path = window.location.pathname

    switch (path) {
        case "/history":
            return <History />


    }

    return (

        <div onClick={handleclik}>

            <button>
                {props.children}
            </button>

        </div>

    )


}