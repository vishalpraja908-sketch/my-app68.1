function SignUp() {
  return (
    <div className="flex justify-center items-center  mt-24">
      <div className="flex flex-col items-center gap-6 text-end  p-8 ">
      <h1 className="text-5xl">WELCOME</h1>

        <input
          type="text"
          name="username"
          placeholder="👤 USERNAME"
          className="w-80 p-2 bg-blue-700 border-4 rounded-lg outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="🔒 PASSWORD"
          className="w-80 bg-blue-700 p-2 border-4 rounded-lg outline-none"
        />

        <button className="mt-4 w-80 border-4 rounded-lg bg-white text-blue-600 font-extrabold py-2 hover:bg-blue-100">
          LOGIN
        </button>

        <h1 className="font-bold text-white self-end pl-8">
          Forgot password?
        </h1>
      </div>
    </div>
  );
}

export default SignUp;
