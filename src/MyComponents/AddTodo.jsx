import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title , setTitle]  = useState("");
    const [desc , setDesc]  = useState("");

    const submitt = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("cannot be empty")
        }
        props.addTodo(title , desc)
    }
    return (
        <div className='container my-3'>
            <h3>ADD TODO</h3>
            <form onSubmit={submitt}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title here</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
