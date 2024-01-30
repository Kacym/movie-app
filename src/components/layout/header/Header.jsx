import React from "react";
import style from "./Header.module.scss";
import Button from "../../UI/button/Button";

const Header = ({ modalOpenAndCloseHandler }) => {
  return (
    <header className={style.header}>
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
