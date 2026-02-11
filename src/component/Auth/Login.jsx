import { useRef } from "react";
function Login({ handleLogin }) {
  let email = useRef();
  let password = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    let userEmail = email.current.value;
    let userPassword = password.current.value;

    handleLogin(userEmail, userPassword);

    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="bg-black">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 bg-[#1D1D1D] rounded-xl">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            action=""
            className="flex flex-col items-center justify-center"
          >
            <input
              ref={email}
              required
              type="email"
              className="text-white bg-black outline-none border-2 border-emerald-600 rounded-full py-3 text-xl px-5"
              placeholder="Enter your email"
            />
            <input
              required
              ref={password}
              type="password"
              placeholder="Enter your password"
              className="text-white bg-black outline-none border-2 border-emerald-600 rounded-full py-3 text-xl  mt-2 px-5"
            />
            <button className="text-white outline-none border-none bg-emerald-600 rounded-full py-2 text-xl px-7 mt-2 cursor-pointer">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
