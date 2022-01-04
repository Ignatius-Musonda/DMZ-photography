import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component { 


    state = { 
            
         title :''

    } 


//     addTodo = (title)  => { 

//         // const newTodo = { 
//         //     id : 4, 
//         //     title, 
//         //     completed : false 
//         // }

//         // this.setState({todos: [...this.state.todos, newTodo]})
// }


    onSubmit = (e) => { 

        e.preventDefault(); 
        this.props.addTodo(this.state.title);
        this.setState({ title:'' })
    }

    onChange = (e) => this.setState({ title: e.target.value}); 



    render() {
        return (
            <form  onSubmit={this.onSubmit}   style={{display : 'flex' }}>

                <input type="text" 
                name="title" 
                style={{flex : '10', padding :'5px' }}
                placeholder="Add todo ..." 
                value={this.state.title}
                onChange={this.onChange}
                />
                 
                 <input type="submit" 
                 value = "submit"
                  className ="btn"
                  style={{flex: '1'}}

                 />
                


            </form>
        )
    }
} 
///propTypes
AddTodo.propTypes= {

    addTodo: PropTypes.func.isRequired
  
}

export default AddTodo
