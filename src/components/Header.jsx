import styled from "styled-components";
import { BiAdjust } from "react-icons/bi";
import ToDoContext from "../context/todo-context";
import { useContext } from "react";

const ThemeSelector = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px 0;

  .headerText {
    color: ${(props) => props.theme.text};
    font-size: 24px;
    font-family: "Pacifico", cursive;
  }

  .changeThemeBtn {
    width: 35px;
    height: 35px;
    border: 1px solid #797979;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${(props) => props.theme.themeButton};
    color: ${(props) => props.theme.body};
    font-size: 25px;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .changeThemeBtn:hover {
    transform: rotate(360deg);
  } 
`;

const Theme = () => {
  const { changeTheme } = useContext(ToDoContext);

  return (
    <ThemeSelector>
      <p className="headerText">Classic To-Do</p>
      <button className="changeThemeBtn" onClick={() => changeTheme()}>
        <BiAdjust />
      </button>
    </ThemeSelector>
  );
};

export default Theme;
