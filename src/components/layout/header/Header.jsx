import React from "react";
import "./Header.css";
import Button from "../../UI/button/Button";

const Header = ({ modalOpenAndCloseHandler }) => {
  return (
    <header className="header">
      <Button
        onClick={modalOpenAndCloseHandler}
        style={{ backgroundColor: "orange", padding: "10px 40px" }}
      >
        Добавить фильм
      </Button>
    </header>
  );
};

export default Header;
