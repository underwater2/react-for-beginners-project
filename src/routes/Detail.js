import { useEffect } from "react";
import { useParams } from "react-router-dom"; // 이 컴포넌트 url의 변수값을 받아온다. 예) {id: 34005}

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Details</h1>;
}
export default Detail;
