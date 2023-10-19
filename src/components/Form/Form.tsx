import React, { useState, ChangeEvent, useEffect } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");

  const {tg} = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
        text: 'Отправить данные'
    })
  }, [])

  useEffect(() => {
    if (!street || !country) {
        tg.MainButton.hide();
    }else {
        tg.MainButton.show();
    }
  },[country, street])

  const onChangeCountryInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const onChangeCountrySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };

  const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Страна"}
        value={country}
        onChange={onChangeCountryInput}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Улица"}
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeCountrySelect}>
        <option value={"physical"}>Физ. лицо</option>
        <option value={"legal"}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
