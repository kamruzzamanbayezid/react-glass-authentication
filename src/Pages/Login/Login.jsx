import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { useRef } from 'react';

const Login = () => {

    const { LogIn, resetPassword } = UseAuth();
    const emailRef = useRef();
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();

        // value input field
        const email = e.target.email.value;
        const password = e.target.password.value;

        // validation
        if (password.length < 6) {
            toast.error('Password should have at least 6 character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Please provide a strong password')
            return;
        }

        // create user
        LogIn(email, password)
            .then(res => {
                toast.success('Successfully Logged In')
                navigate('/')

            })
            .catch(err => {
                toast.error(err.message)
            })

    }

    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                toast('Please check your email')
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;