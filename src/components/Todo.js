import React from 'react'
import {TodoItems} from './TodoItems';

export const Todo = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin: "40px auto",

    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Pending List </h3>
            {props.todoI.length===0?"OOPs nothing in the list":
            props.todoI.map((todo)=>{
                console.log(todo.sno)
                return ( <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })}
        </div>
    )
}
