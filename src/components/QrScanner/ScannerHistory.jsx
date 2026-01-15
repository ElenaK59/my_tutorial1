import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./ScannerHistory.module.css";
export const ScannerHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  console.log(data);
  return (
    <div className={s.container}>
      {data.map((text) => (
        <p>
          <span key={text}>{text}</span>
          <span>
            <QRCodeSVG size={100} />
          </span>
        </p>
      ))}
    </div>
  );
};
