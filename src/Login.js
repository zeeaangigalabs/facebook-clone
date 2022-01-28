import { Button } from '@mui/material';
import React from 'react';
import "./Login.css"
import {auth,provider,signInWithPopup } from "./firebase"
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider'
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () =>{
        //sign in 
        signInWithPopup(auth,provider)
        .then((result)=>{
            // console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error)=>alert(error.message));
    }
  return <div
   className='login'>
       <div className='login__logo'>
           <img
           src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png'/>
           <img
           src='https://crowdrx.org/wp-content/uploads/2021/08/logo-fb.png'/>
       </div>
       <Button type="submit" onClick={signIn}>Sign In</Button>
   </div>;
}

export default Login;
