import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
// import {useContext} from 'react';
// import AuthContext from './store/auth-context';
import useLogInStore from "./store/useStore";
function App() {
  // const authCtx=useContext(AuthContext);
  const isloggedInStore = useLogInStore((state) => state.isLoggedIn);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
       {/* {!authCtx.isLoggedIn &&  */}
       {!isloggedInStore && 
       <Route path='/auth'>
          <AuthPage />
        </Route>
        }
        {/* {authCtx.isLoggedIn && */}
        {isloggedInStore &&
        <Route path='/profile'>
          <UserProfile />
        </Route>
        }
        <Route path='*'>
        <Redirect to='/'></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
