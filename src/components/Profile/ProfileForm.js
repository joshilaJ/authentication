import { useRef, useContext } from 'react';

// import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import {useHistory} from 'react-router-dom';
import useLogInStore from '../../store/useStore';

const ProfileForm = () => {

  const logIntoken=useLogInStore(state=>state.token);
  const logInStore=useLogInStore(state=>state.login);
  const logOutStore=useLogInStore(state=>state.logout);

  const history=useHistory();
  const newPasswordInputRef = useRef();
  // const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDWvD1kymdPolUevYtHiLcUYye3oWC9HHU', {
      method: 'POST',
      body: JSON.stringify({
        // idToken: authCtx.token,
        idToken:logIntoken,

        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!
history.replace('/');

    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;