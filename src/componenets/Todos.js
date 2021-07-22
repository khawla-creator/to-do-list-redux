import React, {useState} from "react";
import {connect} from 'react-redux';
import {addTodos, removeTodos, updateTodos,completeTodos} from '../redux/reducer.js';
import {GoPlus} from 'react-icons/go'

const mapStateToProps = (state) =>{
  return { 
    todos : state,
  }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo : (obj) => dispatch(addTodos(obj)),
      removeTodo : (id) => dispatch(removeTodos(id)),
      updateTodo : (obj) => dispatch(updateTodos(obj)),
      completeTodo: (id) => dispatch(completeTodos(id)),
  
    };
  };

const Todos = (props)=> { 
   const [todo, setTodo]=useState('');
   
   const handelChnage=(e)=> {
        setTodo (e.target.value);
   };

  return (
    <div className="addTodos" > 
        <input 
        type =" text" 
        placeholder=" add your todo " 
        className="todo-input"
        onChange= { (e)=> handelChnage(e)}
        />

    <button className="add-btn"
          onClick= {()=> props.addTodo({
            id: Math.random(),
            item: todo,
            completed : false,
          }) 
          }> <GoPlus/></button>
          
          
    </div>
  );
};

export default connect (mapStateToProps, mapDispatchToProps) (Todos);



