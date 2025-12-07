import React, { use, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { Eye, EyeClosed } from 'lucide-react';
import toast from 'react-hot-toast';
import DocumentMeta from 'react-document-meta';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigateTo = useNavigate();
  const { user, signIn, setUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const meta = {
    title: "Login | Kids Toys Market",
    description: "Login to your Kids Toys Market account to access toys, wishlist, and dashboard.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "login, account login, kids toys, toy shop login, user authentication"
      }
    }
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    signIn(email, password)
      .then(() => {
        // const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`)
        navigateTo("/");
        toast.success("Register Successfully");

      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode);
      });

  }


  const handleGoogleSignIn = () => {

    signInWithGoogle(googleProvider)
      .then(result => {
        // console.log(result.user);
        setUser(result.user);
        toast.success("Register Successfully");
        navigate("/");

      })
      .catch(error => {
        console.log(error)
      })
  }
  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }


  return (
    <DocumentMeta {...meta}>
      <div className='flex justify-center items-center  lg:min-h-screen my-10'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 ">
          <h2 className='text-center font-semibold text-2xl  '>Login Your Account</h2>
          <form onSubmit={handleLogIn} className="card-body ">
            <fieldset className="fieldset text-lg">

              <label className="label">Email</label>
              <input name='email'
                type="email"
                onChange={(e) => setLoginEmail(e.target.value)} className="input" placeholder="Email"
                required />

              <label className="label">Password</label>
              <div className='relative'>
                <input name='password'
                  type={showPassword ? 'text' : "password"}
                  className="input"
                  placeholder="Password"
                  required />
                <button
                  onClick={handleTogglePasswordShow}
                  className='absolute right-8 top-2'>
                  {showPassword ? <Eye></Eye> : <EyeClosed></EyeClosed>}
                </button>
              </div>

              <div><NavLink to="/auth/forgot-password"
                state={{ email: loginEmail }}
                className="link link-hover">Forgot password?</NavLink></div>
              {error && <p className="text-red-800 ">{error}</p>}
              <button type='submit' className="btn btn-neutral mt-4 text-lg">Login</button>
              <p className='font-semibold text-lg text-center pt-5'>Don't have an account? <NavLink to='/register' className="text-red-500">Register</NavLink></p>
              <p className='text-center'>Or</p>
              {
                !user &&
                <button className='btn btn-neutral mt-4 text-sm' onClick={handleGoogleSignIn}>Login With Google</button>
              }
            </fieldset>
          </form>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default Login;