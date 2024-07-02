import "./App.css";
import TreeMenu from "./Components/Tree/Tree-Menu";
// import Color from "./Components/Color";
// import MoreLoader from "./Components/MoreLoader";
// import MySlider from "./Components/MySlider";
// import StarRating from "./Components/Star_Rating";
import menu from './Components/Tree/tree.js'

function App() {
  return (
    <>
      {/* <Color/> */}
      {/* <MySlider/> */}
      {/* <MoreLoader/> */}
      {/* <StarRating/> */}
      <TreeMenu menus={menu}/>
    </>
  );
}

export default App;
