import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { QrCodeGenerator } from "./QrGenerator/QrCodeGenerator";
import { QrCodeScanner } from "./QrScanner/QrCodeScanner";
import { GeneratorHistory } from "./QrGenerator/GeneratorHistory";
import { ScannerHistory } from "./QrScanner/ScannerHistory";
import { Home } from "./Home";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generatorhistory" element={<GeneratorHistory />} />
        <Route path="/scanhistory" element={<ScannerHistory />} />
      </Routes>
    </div>
  );
};
export { Layout };
