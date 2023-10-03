import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftItems = () => {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then(res =>res.json())
    .then(data=>setCatagory(data))
  },[])
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        All Catagory
      </h2>
      {
        catagory.map(cat => <Link className="block py-4 w-full text-gray-600 hover:text-black font-semibold hover:bg-slate-100 text-center" key={cat.id}>{cat.name}</Link>)
      }
    </div>
  );
};

export default LeftItems;