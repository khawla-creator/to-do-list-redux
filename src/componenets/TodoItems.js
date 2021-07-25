import React, {useRef} from 'react' ; 
import {AiFillEdit} from "react-icons/ai";
import {IoMdDoneAll} from "react-icons/io";
import {AiFillDelete} from "react-icons/ai";
import {motion} from 'framer-motion'


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
  <motion.li
  initial={{ x : "150vw", transition: {type: "spring" , duration: 2} }}
  animate={{ x: 0, transition :{type : "spring", duration:2} }}
  whileHover={{ scale : 0.9, transition: {type : "spring", duration:1} }}
  exit ={{x: "-60vw", scale : [1,0], transition: { duration: 0.9} }}
  key= {item.id} className='card'>
      <textarea 
      ref={inputRef} 
      disabled={inputRef} 
      defaultValue={item.item}
      onKeyPress = {(e) => update(item.id, inputRef.current.value, e)}
      />
        <div className='btns'>

            <motion.button
            whileHover={{scale:1.4 }}
            whileTap={{scale:0.9 }}
            onClick ={()=> changeFocus()} > 
            {" "} <AiFillEdit style={{color:'blue'}}/> {" "} 
            </motion.button>

            {item.completed === false && (
            <motion.button 
            whileHover={{scale:1.4 }}
            whileTap={{scale:0.9 }}
            onClick={()=> completeTodo(item.id)}>
            {" "}<IoMdDoneAll style={{color:'green'}}/>{" "}
            </motion.button>
            )}

            <motion.button
             whileHover={{scale:1.4 }}
             whileTap={{scale:0.9 }}
            onClick={()=> removeTodo(item.id)}>
            {" "} <AiFillDelete style={{color:'red'}}/> {" "}
            </motion.button>

        </div>
              {item.completed && <span className='completed'> ✔ Done</span>}
      </motion.li> 
</div>
  )
} 

export default TodoItem ;