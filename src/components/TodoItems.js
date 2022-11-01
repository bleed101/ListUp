import React from 'react'

export const TodoItems = ({todo, onDelete}) => {
    return (
        <>
            <div>
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{todo.Type}</div>
                        {todo.Des}
                        </div>
                        <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
                    </li>
                </ol>
            </div>
            <hr />
        </>
    )
}
