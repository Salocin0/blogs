import { NavLink } from "react-router-dom";
import "./Header.css";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/my-blogs", label: "Mis Blogs" },
];

const loggedLinks = [
  { to: "/new-post", label: "Nuevo Blog", className: "link-end" },
  { to: "/logout", label: "Cerrar sesión", className: "link-end" },
];

const Header = ({ isLogged }) => {
  return (
    <nav className="topnav">
      <div className="start-container">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="link-end-container">
        {isLogged &&
          loggedLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${link.className} ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
      </div>
    </nav>
  );
};

export default Header;
