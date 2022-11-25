import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  // useEffect : 코드를 언제 실행할지 결정할 수 있음
  useEffect(() => {
    console.log("I run only once.");
  }, []); // 컴포넌트의 첫번째 렌더링에만 해당 함수가 실행되도록 함 (한 번)
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); // keyword가 변화할 때마다 실행된다
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]); // 둘 중 하나가 변화할 때마다 실행된다
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
