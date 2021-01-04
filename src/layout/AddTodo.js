import React,{Component} from 'react';
import propTypes from 'prop-types';

export class AddTodo extends Component{
    state = {
        title:''
    }

    // function that updates the state
    onChange = (e) =>this.setState({title:e.target.value});

    // onSubmit function
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    render(){
        return(
        <form style={{display:'flex'}} onSubmit={this.onSubmit}>
            <input types='text' name = "title" placeholder='Add Todo...' style={{flex:'10',padding:'5px'}} onChange = {this.onChange}/>

            <input type="submit" value="submit" className="btn" style={{flex:'1'}} />
        </form>
        )
    
    }
}

// proptypes
AddTodo.propTypes = {
    addTodo:propTypes.func.isRequired
}

export default AddTodo;

