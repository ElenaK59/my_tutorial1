import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={s.container}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/generator">Генератор QR</NavLink>
      <NavLink to="/scan">Сканер QR</NavLink>
      <NavLink to="/generatorhistory">История генераторации</NavLink>
      <NavLink to="/scanhistory">История сканирования</NavLink>
    </nav>
  );
};
