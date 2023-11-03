export const LoginSignup = () => {
  return (
    <div className="container flex items-center justify-center py-20">
      {/* login container */}
      <div className="flex flex-col justify-center gap-5 p-10 text-lg glass">
        <h1 className="text-2xl font-bold">Login</h1>
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
          Create an account?{" "}
          <a href="/" className="text-red-500">
            Click here
          </a>
        </p>
        <div>
          <input type="checkbox" />{" "}
          <span>
            By continuing, I agree to the terms of use & privacy policy
          </span>
        </div>
      </div>
    </div>
  );
};
