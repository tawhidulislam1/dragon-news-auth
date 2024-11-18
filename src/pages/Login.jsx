import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                <h2 className="font-semibold text-4xl text-center">Login Your Account</h2>
                <div className="divider"></div>
                <form className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center"> not have an account <Link to='/auth/register' className="text-red-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;