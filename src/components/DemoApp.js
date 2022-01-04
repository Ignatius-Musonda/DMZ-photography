import React, {Component} from 'react'; 
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';

// import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header'
import PNavBar from './components/NavBar/PNavBar';

class App extends Component {
  state = {

      todos : [
        {

          id: 1,
          title: 'Take out the trash',
          Completed : false

        },
        {

          id: 2,
          title: 'Dinner with wife',
          Completed : true

        }, 
        {

          id: 3,
          title: 'Meeiting with boss',
          Completed : false

        }



      ]

    }

/// Togo Complete
    markComplete = (id) => { 
      
          this.setState({ todos: this.state.todos.map(todo=>{

              if (todo.id === id){

                    todo.Completed= !todo.Completed
              }
              
              return todo;
          }) });
  
      }

///Delete todo 

delTodo = (id) => { 

      this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)] });
}
 
///// Add todo

addTodo = (title)  => { 

  const newTodo = { 
      id : 4, 
      title, 
      completed : false 
  }

  this.setState({todos: [...this.state.todos, newTodo]})
}


  render() { 

           
    return (  
 <Router> 
     
     <Switch> 

     <Route path='/PNavBar' exact={true} component={PNavBar} /> 

     </Switch>
         <div className="App">
          <div  className ="container"  >         
              
          <Header />
          <AddTodo   addTodo={ this.addTodo}  />
          <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}  />
          </div>
     
    </div>
    </Router>

    );
  }
} 


 
export default App;


