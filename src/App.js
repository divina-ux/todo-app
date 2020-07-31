import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:[
        {
          id:1,
          content: 'Finish demo',
          priority:'Urgent'
        },
        {
          id:2,
          content: 'finish class',
          priority:'Important'
        },
        {
          id:3,
          content: 'Watch youtube',
          priority:'Can wait'
        }
      ]
    }
  }

  addTodo = (data)=>{

    

    var newTodo = {
      id: Date.now(),
      ...data
    }

    var newList = [newTodo, ...this.state.todos]
    this.setState({
      todos: newList
    })
  }
  removeTodo = ()=>{}
  updateTodo = ()=>{}

  render(){
    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">

            {
              this.state.todos.map((todo)=>{

                var todoProps = {
                  key: todo.id,
                  ...todo
                }
                return (

                  <Todo {...todoProps} />

                )
              })

            }
            
       
            <NewTodoForm addTodo={this.addTodo} />

          </div>
        </div>
      </div>
    )
  }

}

export default App;
