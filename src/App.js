import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer'
import Todos from './MyComponents/Todos'
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';


function App() {
  const OnDelete = (todo) => {
    console.log("delete hui gava", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "yaaahoooooooooo",
      desc: "gohhgpa"
    },
    {
      sno: 2,
      title: "tatatatatatata",
      desc: "soigolrgnnleg"
    },
    {
      sno: 3,
      title: "lalalalala",
      desc: "igohhgpa"
    }
  ]);

  const addTodo = (title, desc) => {
    console.log("adding", title,desc);
    let sno;
    if(todos.length==0){
      sno=1;

    }
    else{
          sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno:sno,
      title : title,
      desc:desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)


  }

  return (
    <>
      <Header title="NCRYPTED" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} OnDelete={OnDelete} />
      <Footer />
    </>
  );
}

export default App;
