import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const MainLayouts = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // to track the logged-in user

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up listener
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center w-100">
              {/* Login or Username */}
              <div className="col-12 col-md-2 mt-2 mt-md-0">
                {user ? (
                  <div className="d-flex gap-2">
                    <button className="cta-button" disabled style={{ cursor: "default", fontSize: "14px" }}>
                      أهلًا، {user.displayName?.split(' ')[0] || 'المستخدم'}
                    </button>
                    <button
                      className="btn btn-sm px-3 py-2 border-0 bg-transparent d-flex align-items-center justify-content-center"
                      onClick={() => signOut(auth)}
                      title="تسجيل الخروج"
                    >
                      <i className="bi bi-box-arrow-left fs-5"></i>
                    </button>




                  </div>
                ) : (
                  <button className="cta-button mt-2" onClick={() => navigate('/login')}>
                    تسجيل دخول
                  </button>
                )}
              </div>

              {/* Navigation Links */}
              <div className="col-8 col-md-8">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul className="navbar-nav flex-row flex-wrap justify-content-center nav-link-clickable">
                    <li className="nav-item mx-2">
                      <a className="nav-link">من نحن</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" onClick={() => navigate('/Favorites')}>المفضلة</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" onClick={() => navigate('/Proverb')}>أمثالنا</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" onClick={() => navigate('/History')}>تاريخنا</a>
                    </li>
                    <li className="nav-item mx-2">
                      <span className="nav-link" onClick={() => navigate('/')}>الرئيسية</span>
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
      <main className="flex-grow-1">{children}</main>

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
