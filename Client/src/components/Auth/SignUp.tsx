import { useState } from "react";
import { Signup } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function SignUp() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const { isloading, error, iserror } = useAppSelector((state) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(Signup({ ...user }));
    if (iserror) {
      alert(`${error}`);
    }
    setuser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-second-white">
      <h1 className="text-2xl font-bold text-center">SignUp</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-paragraph">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => {
              setuser({ ...user, name: e.target.value });
            }}
            className="w-full px-4 py-3 rounded-md bg-background text-paragraph outline-none"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-paragraph">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={(e) => {
              setuser({ ...user, email: e.target.value });
            }}
            className="w-full px-4 py-3 rounded-md bg-background text-paragraph outline-none"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-paragraph">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setuser({ ...user, password: e.target.value });
            }}
            className="w-full px-4 py-3 rounded-md bg-background text-paragraph outline-none"
          />
        </div>
        <button
          disabled={isloading}
          className="block w-full p-3 text-center bg-brand-color text-white rounded-md disabled:cursor-not-allowed"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
