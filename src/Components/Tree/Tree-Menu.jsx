import TreeMenuList from "./Tree-Menu-List";

const TreeMenu = ({menus = []}) => {
  return <>
  <TreeMenuList list={menus}/></>
};

export default TreeMenu;