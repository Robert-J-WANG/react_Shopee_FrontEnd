import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="flex flex-col justify-center gap-5 p-10 text-lg glass">
      <h1 className="text-2xl font-bold">SignUp</h1>
      <input
        type="text"
        placeholder="Email address"
        className="w-full input input-bordered input-lg"
      />
      <input
        type="text"
        placeholder="Password"
        className="w-full input input-bordered input-lg"
      />
      <button className="text-lg btn btn-error">Continue</button>
      <p>
        already have an account?{" "}
        <Link to="/react_Shoppia/loginSignup/" className="text-red-500">
          Click here
        </Link>
      </p>
      <div>
        <input type="checkbox" />{" "}
        <span>By continuing, I agree to the terms of use & privacy policy</span>
      </div>
    </div>
  );
};
