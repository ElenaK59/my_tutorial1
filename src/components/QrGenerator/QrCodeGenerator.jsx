import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATORE_DATA } from "../../constants";
import s from "./QrCodeGenerator.module.css";
export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  // console.log(array[0]);
  const onClickHandler = () => {
    const prevdata = localStorage.getItem(GENERATORE_DATA) || "[]";
    const parsedData = JSON.parse(prevdata);
    parsedData.push(value);
    localStorage.setItem(GENERATORE_DATA, JSON.stringify(parsedData));
    // console.log(parsedData);
    setResult(value);
    setValue("");
  };

  const onChangehandler = (e) => {
    setValue(e.target.value);
    setResult("");
  };
  console.log(value);
  return (
    <div className={s.container}>
      <input
        type="text"
        className={s.input}
        placeholder="Введите текст для генерации QR"
        value={value}
        onChange={onChangehandler}
        name="qrInput"
        autoComplete="off"
      />

      <button type="button" className={s.button} onClick={onClickHandler}>
        Сгенерировать QR
      </button>
      {result !== "" && (
        <div className={s.qrWrapper}>
          Ваш QR код:
          <QRCodeSVG
            value={result}
            size={156}
            // value={value}
          />
        </div>
      )}
    </div>
  );
};
