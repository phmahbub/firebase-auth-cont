import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/UserContext';

const Signup = () => {
    const {createUser, signInGoogle} = useContext(AuthContext)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        setEmail(email)
        const password = form.password.value
        setPassword(password)
        const name = form.name.value
       
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .cath(error=>{
            console.error(error)
        })

      }

      const handleGoogleSignIn = () =>{
        signInGoogle()
        .then(result => {
            const user = result.user
            setUser(user)
        })
      }

      return (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-center">Sign up now!</h1>
                <p className="py-6">
                 Please sign up with your and fsdfsdfsadfasdfgdffdgpassword.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name ='name'
                      type="name"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name ='email'
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email!==''? <p className='text-red-500 '>Please use a valid email address. </p>:<p></p>
                  }
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    {
                        !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) && password!==''?<p className='text-red-500 '>Password should at least 6 character having one upper case, one special character and one number</p>:<p></p>
                    }
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <div className="form-control mb-6 mx-8">
                    <button onClick={handleGoogleSignIn}  className="btn btn-success">Google Sign in</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Signup;