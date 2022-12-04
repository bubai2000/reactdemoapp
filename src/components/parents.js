// media imports
import logo from "../media/logo.svg";
// css imports
import "./parents.css";
// component imports
import { List, Add } from "./list";

export function Header({ children, name }) {
  return (
    <div>
      <img src={logo} id="logo" alt="Logo" />
      <h1 className="salutation">
        Hello {children} {name}
      </h1>
    </div>
  );
}

export function Body() {
  return (
    <>
      <List />
    </>
  );
}
