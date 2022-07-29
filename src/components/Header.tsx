import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__title">
          <i className="fa-solid fa-clipboard-list"></i>
          <h1>Your TODOS</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
