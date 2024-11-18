
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser , setUser} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        createUser(email, password).then((result) => {
            const user = result.user;
            setUser(user)
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
    return (
        <div>
            <div className="flex justify-center items-center py-10">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                    <h2 className="font-semibold text-4xl text-center">Register Your Account</h2>
                    <div className="divider"></div>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Register</button>
                        </div>
                    </form>
                    <p className="text-center">  have an account ?<Link to='/auth/register' className="text-red-600">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;