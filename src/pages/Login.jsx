import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="email" placeholder="Email" className="input input-bordered w-full mb-4" required />
        <input type="password" placeholder="Password" className="input input-bordered w-full mb-4" required />
        <button className="btn btn-primary w-full">Login</button>
        <p className="text-sm mt-4 text-center">
          New here? <Link className="text-blue-600 underline" to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
