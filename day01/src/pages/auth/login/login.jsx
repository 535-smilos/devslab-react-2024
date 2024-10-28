import { useCallback } from "react";
import { useState } from "react";
import { loginUser } from "../../../services/auth";
import { useAuthContext } from "../../../contexts/auth";

export const LoginPage = () => {
  const { handleLogin } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const handleEmailChange = useCallback((event) => {
    // event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    // event.preventDefault();
    const { value } = event.target;
    setPassword(value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const loginData = {
        email, //:email
        password, //:password
      };
      const response = await loginUser(loginData);

      handleLogin({email:email, token:response.token});
    },
    [email, password]
  );

  return (
    <form
      className="flex flex-col justify-center max-w-xs mx-auto mt-12 gap-2"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-gray-300 rounded-md border-black border"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="bg-gray-300 rounded-md border-black border"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="bg-green-400 rounded-md border-green-500 border-2 " type="submit">
        Login
      </button>
    </form>
  );
};
