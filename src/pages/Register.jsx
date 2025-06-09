import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input type="text" placeholder="Name" className="input input-bordered w-full mb-4" required />
        <input type="email" placeholder="Email" className="input input-bordered w-full mb-4" required />
        <input type="text" placeholder="Photo URL" className="input input-bordered w-full mb-4" />
        <input type="password" placeholder="Password" className="input input-bordered w-full mb-4" required />
        <button className="btn btn-primary w-full">Register</button>
        <p className="text-sm mt-4 text-center">
          Already have an account? <Link className="text-blue-600 underline" to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
