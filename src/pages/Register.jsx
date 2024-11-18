
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="flex justify-center items-center py-10">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                    <h2 className="font-semibold text-4xl text-center">Register Your Account</h2>
                    <div className="divider"></div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

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