import { useEffect } from "react";
import { useState } from "react";

const MySlider = () => {
  const [images, setImages] = useState([]);
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    async function fletchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=5"
        );
        const data = await response.json();
        setImages(data);
      } catch (e) {
        console.error("error here,", e);
      }
    }
    fletchData();
  }, []);

  const nextbtn = () => {
    setSlider((pre) => (pre === images.length - 1 ? 0 : pre + 1));
  };

  const prevbtn = () => {
    setSlider((pre) => (pre === 0 ? images.length - 1 : pre - 1));
  };

  if (images.length === 0) {
    return <>Looding...</>;
  }
  return (
    <>
      <div>
        <div>
          <img src={images[slider].url} alt={images[slider].title} />
          <p>{images[slider].title}</p>
        </div>
        <button className="button" onClick={nextbtn}>
          Previous
        </button>
        <button className="button" onClick={prevbtn}>
          Next
        </button>
      </div>
    </>
  );
};

export default MySlider;
