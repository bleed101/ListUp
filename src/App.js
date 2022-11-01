import './App.css';
import Header from "./components/Header";
import {Todo} from "./components/Todo";
import { TodoForm } from './components/TodoForm';
import {Footer} from "./components/Footer";
import React, { useState, useEffect } from 'react';
import { About } from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todoList")===null)
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todoList"))
  }

  const onDelete=(todo)=>{
    console.log("I am onDelete",todo)
    setTodo(todoList.filter((e)=>{
      return e!==todo; 
    }))
    localStorage.setItem("todoList",JSON.stringify(todoList))
  }

  const addTodo=(title,desc)=>{
    console.log("adding: ",title,desc)
    let snoLen=todoList.length+1;
    // if(todoList.length===0)
    //   {snoLen=0;}
    // else
    //   {snoLen=todoList[todoList.length-1].sno+1;}
    const newItem=
      {
        sno:snoLen,
        Type:title,
        Des:desc,
      }
    
    setTodo([...todoList,newItem]);
    console.log(newItem);
  }

  const [todoList, setTodo]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todoList",JSON.stringify(todoList));
  }, [todoList])
  return (
    <>
      <Router>
        <Header set={true}/>
          <Routes>
            <Route  path='/' 
            // render={()=>{
            //   return(
            //     <>
            //       <TodoForm addTodo={addTodo}/>
            //       <Todo todoI={todoList} onDelete={onDelete}/>
            //     </>)
            // }}
            element={
              <>
              <TodoForm addTodo={addTodo}/>
              <Todo todoI={todoList} onDelete={onDelete}/>
              </>
            }
            />
            <Route path="/about" element={<About />}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
