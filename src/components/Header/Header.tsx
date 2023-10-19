import React from "react";
import Button from "../Button/Button";
import "Header.css";
import { useTelegram } from "../../hooks/useTelegram";
const { user, onClose } = useTelegram();

const Header = () => {
  return (
    <div className={"header"}>
      <Button className={"button"} onClick={onClose}>
        Закрыть
      </Button>
      <span className={"username"}>{user?.username}</span>
    </div>
  );
};

export default Header;
