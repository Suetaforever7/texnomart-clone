import { useEffect, useState } from "react";
import "./DetailPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detailpage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setData(res.data))
      .then((js) => console.log(js))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.thumbnail} alt="" />
    </div>
  );
}

export default Detailpage;