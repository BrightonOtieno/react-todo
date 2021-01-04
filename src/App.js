import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './components/pages/About';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './layout/AddTodo';
import './App.css';
//import {v4 as uuid} from "uuid"; 

class App extends Component{
  state = {
    todos: []
  }
  // Upon componentMount we make a http request for todos
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then(res=>this.setState({todos:res.data}))
  }
  // toggle complete
  markComplete = (id) =>{
  //return console.log(id);
  /** make changes to current todos: state 
   * by looping though(map) individual todo object and 
   * changing its properties */
  this.setState({todos:this.state.todos.map((todo)=>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
  }

  // Delete Todo
  delTodo = (id) =>{
    //console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=> this.setState({todos:[...this.state.todos.filter((todo)=>todo.id !== id)]}))
  
  }

  // AddTodo
  addTodo = (title) =>{
    //console.log(title);
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    })
    .then(res=> this.setState({todos:[...this.state.todos,res.data]}))


  }

  render(){
  //console.log(this.state.todos);
    return(

      <Router>
        <div className='App'>
        <div className="container">
            <Header/>
            <Route exact path = "/" render = {props => (
                <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos ={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
                </React.Fragment>
            )}
          />
          
          <Route path = "/about" component = {About} />
        </div>
      </div>
      </Router>
    );
  }
}




export default App;