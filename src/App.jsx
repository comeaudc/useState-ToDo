import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    id: 1,
    desc: "",
    complete: false,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(formData.desc){
    let input = document.getElementById("textIn");
    input.value = "";

    formData.id = todos.length + 1;

    setTodos([...todos, formData]);
    setFormData({
      id: todos.length + 1,
      desc: "",
      complete: false,
    });}
  }

  let todoList = todos.length
    ? todos.map((el) => {
        return <Todo id={el.id} todo={el} setTodos={setTodos} todos={todos} />;
      })
    : null;

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="textIn"
          type="text"
          name="desc"
          placeholder="What do you have to do?"
        />
        <br />
        <input type="submit" />
      </form>
      <ul>
        What do you need to do?
        {todoList}
      </ul>
    </main>
  );
}

export default App;
