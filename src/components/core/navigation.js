import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Context
import AuthContext from '../../context/auth/authContext';

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const { user, loadUser, isAuthenticated, logout } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {isAuthenticated && <h5>Hello {user.username}!</h5>}
      {isAuthenticated && <Link to='/user'>Change Info</Link>}
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <a href='#!' onClick={logout}>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
