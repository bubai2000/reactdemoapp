import logo from "../media/logo.svg";
import "./parents";

export function Header({ name }) {
  return (
    <>
      <img src={logo}></img>
      <h1>Hello {name}</h1>
    </>
  );
}
