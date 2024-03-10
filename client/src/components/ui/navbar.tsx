import { useState } from 'react';

function NavBar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid text-black">
        <a className="navbar-brand" href="#">
          <span className="fw-bolder fs-4">{ }</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            <li className="nav-item" onClick={() => setSelectedIndex(0)}>
              <a className={selectedIndex === 0 ? 'nav-link active fw-bold' : 'nav-link'} href="#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedIndex(1)}>
              <a className={selectedIndex === 1 ? 'nav-link active fw-bold' : 'nav-link'} href="#">
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => setSelectedIndex(2)}>
              <a className={selectedIndex === 2 ? 'nav-link active fw-bold' : 'nav-link'} href="#">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
