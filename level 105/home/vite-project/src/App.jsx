


const CustomLink = ({ children, to }) => {
  return <a href={to}>{children}</a>
}

export default function App() {
  const path = window.location.pathname;

  
  const router = () => {
    switch(path) {
      case "/samsung":
        return <div>samsung</div>
      case "/aplle":
        return <div>apple</div>
      case "/personal":
        return <div>personal</div>
      case "/huavei":
        return <div>huavei</div>
      case '/xiomi':
        return <div>xiomi</div>

    }
    
  }


  return(
    <div>
      <ul>
        <li><CustomLink to={"/samsung"}>samsung</CustomLink></li>
        <li><CustomLink to={"/apple"}>apple</CustomLink></li>
        <li><CustomLink to={"/xiomi"}>xiomi</CustomLink></li>
        <li><CustomLink to={"/personal"}>personal</CustomLink></li>
        <li><CustomLink to={"/huavei"}>huavei</CustomLink></li>
        

        {router()}
      </ul>
      

    </div>
  )
}
