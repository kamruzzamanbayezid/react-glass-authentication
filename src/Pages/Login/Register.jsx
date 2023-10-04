import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import toast from 'react-hot-toast';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {

    const { createUser, profileName } = UseAuth();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // value input field
        const name = e.target.name.value;
        const email = e.target.email.value;
        const img = e.target.img.value;
        const password = e.target.password.value;

        // validation
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            toast.error('Invalid Email')
            return;
        }
        else if (password.length < 6) {
            toast.error('Password should have at least 6 character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Please provide a strong password')
            return;
        }

        // create user
        createUser(email, password)
            .then((result) => {

                // Update profile | set Profile name & img
                profileName(name, img)
                    .then(() => {
                        toast.success('User Created Successfully')
                        navigate('/')
                    })
                    .catch(error => toast.error(error.message))

            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name='img' placeholder="image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;