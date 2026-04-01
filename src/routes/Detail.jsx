import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`,
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? <h3>Loading</h3> : null}
    </div>
  );
}

export default Detail;
