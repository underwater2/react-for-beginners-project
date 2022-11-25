import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // submit 되어도 새로고침하지 않도록 함
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]); // 현재 state를 가져와서
    setTodo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
        {/* <form> 안에서 <button> 누르면 submit 이벤트 발생 */}
      </form>
      <hr />
      <ul>
        {/* map의 두 번째 argument: array의 index */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
