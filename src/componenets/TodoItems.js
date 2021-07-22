import React, {useRef} from 'react' ; 
import {AiFillEdit} from "react-icons/ai";
import {IoMdDoneAll} from "react-icons/io";
import {AiFillDelete} from "react-icons/ai";


const TodoItem =(props)=> {

  const {item,updateTodo,removeTodo,completeTodo} =props;

  const inputRef = useRef(true);
  const changeFocus = ()=> {
    inputRef.current.disabled= false ;
     inputRef.current.focus()
  } 

  const update =(id, value, e)=> {
    console.log(update)
    if (e.witch=== 10) {
      updateTodo({id,item: value });
       inputRef.current.disabled = true;
    }
  
  };
  
  return (
    <div> 
  <li key= {item.id} className='card'>
      <textarea 
      ref={inputRef} 
      disabled={inputRef} 
      defaultValue={item.item}
      onKeyPress = {(e) => update(item.id, inputRef.current.value, e)}
      />
        <div className='btns'>
            <button onClick ={()=> changeFocus()} > <AiFillEdit style={{color:'blue'}}/> </button>
            <button onClick={()=> completeTodo(item.id)}> <IoMdDoneAll style={{color:'green'}}/>  </button>
            <button onClick={()=> removeTodo(item.id)}> <AiFillDelete style={{color:'red'}}/> </button>
        </div>
              {item.completed && <span className='completed'> Done</span>}
      </li> 
</div>
  )
} 

export default TodoItem ;