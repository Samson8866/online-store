import { useContext } from "react";
import GlobalContext from "../state/globalContext";
import "./styles/navbar.css"

import { Link } from 'react-router-dom';


function Navbar() {

    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Stay Fresh Apparel</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/catalog">Catalog</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/about" role="button" >
            About
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>

          
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
      <div className="d-flex" role="search">

        <button className="btn btn-outline-light">{user.name}</button>

        <Link className="btn btn-outline-light" to="/cart">
            <span className="badge text-bg-primary">{cart.length}</span> View Cart
        </Link>
      </div>
    </div>
  </div>
</nav>
    
    );
}

export default Navbar;