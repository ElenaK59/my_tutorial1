import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { SCAN_DATA } from "../../constants";
import s from "./QrCodeScanner.module.css";
export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
    const prevdata = localStorage.getItem(SCAN_DATA) || "[]";
    const parsedData = JSON.parse(prevdata);
    parsedData.push(result[0].rawValue);
    localStorage.setItem(SCAN_DATA, JSON.stringify(parsedData));
  };
  console.log("dlDJf", scanned);
  return (
    <div className={s.container}>
      <Scanner
        alloMultiple
        onScan={scanHandler}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{ container: { width: 300 } }}
        // value={value}
      />
    </div>
  );
};
