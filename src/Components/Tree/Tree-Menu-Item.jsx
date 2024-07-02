import { useState } from "react";
import TreeMenuList from "./Tree-Menu-List";
import "../style/TreeMenu.css";

const TreeMenuItem = ({ item }) => {
  const [disDisCurrChildren, setDisCurrChildren] = useState({});

  function handleChildrenToggle(getCurrentLabel) {
    setDisCurrChildren({
      ...disDisCurrChildren,
      [getCurrentLabel]: !disDisCurrChildren[getCurrentLabel],
    });
  }
  return (
    <>
      <li>
        <div className="parent">
          <p>{item.label}</p>
          {item && item.children && item.children.length ? (
            <span
              className="span"
              onClick={() => handleChildrenToggle(item.label)}
            >
              {
                disDisCurrChildren[item.label] ? '-' : '+'
              }
            </span>
          ) : null}
        </div>
        {item && item.children && item.children.length > 0 && disDisCurrChildren[item.label] ? (
          <TreeMenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
};

export default TreeMenuItem;
