import { GENERATORE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./GeneratorHistory.module.css";
export const GeneratorHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATORE_DATA) || "[]");
  console.log(data);
  return (
    <div className={s.container}>
      {data.map((text) => (
        <p key={text}>
          <span>{text}</span>
          <span>
            <QRCodeSVG size={100} />
          </span>
        </p>
      ))}
    </div>
  );
};
