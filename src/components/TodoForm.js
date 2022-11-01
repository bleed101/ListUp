import React from 'react'
import { useState } from 'react';

export const TodoForm = ({addTodo}) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    let submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Fields cannot be left empty!")
        }
        else{
            addTodo(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>List up you thing</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
