import { func } from "prop-types";
import { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

// component : jsx를 return하는 function
function Hello() {
  // cleanup function 쓰는 두 가지 방법
  // 1 -> 보통 이 방법으로 쓴다.
  useEffect(() => {
    console.log("hi :)");
    return () => {
      // cleanup function : component가 destroy될 때 실행됨
      console.log("bye :(");
    };
  });
  // 2
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
