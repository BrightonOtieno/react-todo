import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    // dynamic styling (based on data ppts)
    getStyle = () =>{
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #cc dotted'

        }
    }
    // function that marks check upon change on input box
    markComplete = (e) =>{
        console.log(this.props)
    }

    render(){
        const {id,title} = this.props.todo;
        return(
            <div style= {this.getStyle()} >
                <p>
                    <input type="checkbox"  style={{marginRight:'5px'}} onChange={this.props.markComplete.bind(this,id)}/> {" "}
                    {title}
                    <button style = {btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        );
    }
}
// Styles
const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
// defining proptypes
TodoItem.propTypes ={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}

export default TodoItem;