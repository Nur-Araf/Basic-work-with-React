import TreeMenuItem from "./Tree-Menu-Item";

const TreeMenuList = ({ list = [] }) => {
  return (
    <>
      <ul className="menu-list-container">
        {list && list.length
          ? list.map((listItem) => <TreeMenuItem item={listItem} />)
          : null}
      </ul>
    </>
  );
};

export default TreeMenuList;
