import React, { useEffect ,useState } from "react";
import axios from "axios";
import "./Detailpage.css";
import { useParams } from "react-router-dom";
function Detailpage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(`https:/dummyjson.com/product/${id}`)
      .then((res) => setData(res.data))
      .then((js) => console.log(js))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData(id);
  }, );

  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.thumbnail} alt="" />
    </div>
  );
}

export default Detailpage;