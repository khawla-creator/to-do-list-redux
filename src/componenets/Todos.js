import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer.js";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
// import {removeTodos, updateTodos,completeTodos} from '../redux/reducer'
const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj))
    // removeTodo : (id) => dispatch(removeTodos(id)),
    // updateTodo : (obj) => dispatch(updateTodos(obj)),
    // completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handelChnage = (e) => {
    setTodo(e.target.value);
  };
  const add = () => {
    if (todo === "") {
      return alert("input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false
      });
      setTodo(" ");
    }
  };
  return (
    <div className="addTodos">
      <input
        type=" text"
        placeholder=" add your todo "
        className="todo-input"
        onChange={(e) => handelChnage(e)}
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
