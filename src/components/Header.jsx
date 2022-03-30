import styled from "styled-components";

const ThemeSelector = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 0 15px 0;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #797979;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${(props) => props.theme.themeButton};
  }
`;

const Theme = ({ onButtonClick }) => {
  return (
    <ThemeSelector>
      <button onClick={onButtonClick}></button>
    </ThemeSelector>
  );
};

export default Theme;
