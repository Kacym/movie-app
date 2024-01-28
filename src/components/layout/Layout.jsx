import React, { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpenAndCloseHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Header modalOpenAndCloseHandler={modalOpenAndCloseHandler} />
      <Main
        modal={isModalOpen}
        modalOpenAndCloseHandler={modalOpenAndCloseHandler}
      />
    </div>
  );
};

export default Layout;
