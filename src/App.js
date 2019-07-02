import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Header from './Header'
// import Product from './Product'
// import productData from './schoolProducts'
import TodoItem from './TodoItem'
import TodoData from './TodoData'
import Conditional from './Conditional'

import Form from './Form'



// import Joke from './Joke'
// import jokesData from './jokesData'



class App extends Component{

  constructor(){
    super()
    this.state =({
      isLoading: true
    })
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  // constructor(){
  //   super()
  //   this.state = ({
  //     todos: TodoData
  //   })

  //   this.handleChange = this.handleChange.bind(this)
  // }   

  // handleChange(id){
  //      this.setState(prevState => {
  //        const updateditems = prevState.todos.map( todo => {
  //          if(todo.id === id){
  //            todo.completed = !todo.completed
  //          }
  //          return todo
  //        })
  //        return {
  //          todos : updateditems
  //        }
  //      })
  // }

render(){

  // const todoItems = this.state.todos.map(item => <TodoItem key="item.id" item={item} handleChange={this.handleChange}/>)

  return(
    // <div>
    //  {todoItems}
    // </div>
<div>
  <Conditional isLoading={this.state.isLoading}/>

  <Form />
</div>

  )
}
}

export default App;
