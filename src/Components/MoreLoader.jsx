import { useEffect, useState } from "react";
import "./style/MoreLoader.css"; // Update the import to match your directory structure

const MoreLoader = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return (
      <>
        <h4>Loading Data...... Please wait</h4>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="product-container">
          {products && products.length
            ? products.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="">
          {disable ? (
            <p>You have 100 products</p>
          ) : (
            <button
              className="load-more-button"
              disabled={disable}
              onClick={() => setCount(count + 1)}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MoreLoader;
