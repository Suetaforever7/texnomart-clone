import React from "react";
import { useState, useEffect } from "react";
import ProductCarusel from "../Carusel/ProductCarusel/ProductCarusel";
import axios from "axios";
function Home() {
  const [datas, setDatas] = useState([]);
  function getData() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setDatas(res.data))
      .then((log) => console.log(log))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(datas?.products);
  return (
    <div>
      <ProductCarusel />
    </div>
  );
}

export default Home;
