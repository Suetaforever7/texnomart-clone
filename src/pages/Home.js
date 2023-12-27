import { useState, useEffect } from "react";
import ProductCarousel from "../components/Carusel/ProductCarusel/ProductCarusel"
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
  console.log(datas);
  return (
    <div>
      <ProductCarousel data={datas?.products} />
    </div>
  );
}

export default Home;

