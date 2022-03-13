// import { useContext } from 'react';
import { Link } from "react-router-dom";

// import AuthContext from '../../store/auth-context';
import classes from "./MainNavigation.module.css";
import useLogInStore from "../../store/useStore";

const MainNavigation = () => {
  const logOutStore = useLogInStore((state) => state.logout);
  const isloggedInStore = useLogInStore((state) => state.isLoggedIn);
  // const authCtx = useContext(AuthContext);

  // const isLoggedIn = authCtx.isLoggedIn;

  const logOutHandler = () => {
    // authCtx.logout();
    logOutStore();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {/* {!isLoggedIn && ( */}
          {!isloggedInStore && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {/* {isLoggedIn && ( */}
          {isloggedInStore && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {/* {isLoggedIn && ( */}
          {isloggedInStore && (
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
