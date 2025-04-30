import React from "react";

const MainLayouts = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center w-100">
              {/* Login Button */}
              <div className="col-12 col-md-2 mt-2 mt-md-0">
                <button className="cta-button">تسجيل دخول</button>
              </div>

              {/* Navigation Links */}
              <div className="col-8 col-md-8">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul className="navbar-nav flex-row flex-wrap justify-content-center">
                    <li className="nav-item mx-2">
                      <a className="nav-link active-page" href="#">من نحن</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href="#">المفضلة</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href="#">أمثالنا</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href="#">تاريخنا</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href="#">الرئيسية</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Logo */}
              <div className="col-4 col-md-2 text-end">
                <a className="navbar-brand" href="#">
                  <img src="/img/SaugiOlogy2.png" alt="شعار" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer mt-auto py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3 mx-auto">
              <div className="main6">
                <p className="mb-0 footer-text">SaudiOlogy 2025 &copy; جميع الحقوق محفوظة</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayouts;
