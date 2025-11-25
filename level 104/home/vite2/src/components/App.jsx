
import './App.css'
import Button from './Button'
import Card from './Card'
import Product from './product'
import Text from './Text'
import Todo from './Todo'



export default function App() {

  return(
    <div>
    <Text data={"Hello world"} />

    <Product data={"PRICE"}>15$</Product>

    <Todo data={"To do list"}>1-do homework,2-drink water,3-workout</Todo>

    <Button data={"Hello"}/>

    <Card data={"Card info"}>this card is very rare dont lose it</Card>
    </div>
  )
}
