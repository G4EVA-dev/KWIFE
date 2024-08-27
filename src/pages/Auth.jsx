import { useState } from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";

function Auth({ onSuccessfulAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let authToken;
      if (isLogin) {
        // Handle login logic
        authToken = await loginUser(email, password);
      } else {
        // Handle signup logic
        authToken = await registerUser(username, email, password);
      }

      if (authToken) {
        localStorage.setItem('authToken', authToken);
        if (onSuccessfulAuth) onSuccessfulAuth();
      } else {
        alert('Authentication failed');

        localStorage.setItem("authToken", authToken);
        console.log("Authentication successful:", authToken); 
      }// Log success
        if (onSuccessfulAuth) onSuccessfulAuth();
      else {
        alert("Authentication failed");
        console.log("Authentication failed"); // Log failure

      }
    } catch (err) {
      console.error("Authentication error:", err);
    }
    console.log()
  };

  const loginUser = async (email, password) => {
    // Replace this with your actual login API call
    const response = await fetch(
      "https://nobility-nodejs-backend-deployment.onrender.com/api/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();

    console.log("Login response:", data); // Log respo
    return data.token; // Adjust this if your API returns the token differently
  };

  const registerUser = async (username, email, password) => {
    // Register via the provided API
    const response = await fetch(
      "https://nobility-nodejs-backend-deployment.onrender.com/api/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      }
    );
    const data = await response.json();

    console.log("Registration response:", data); // Log response data

    return data.token; // Adjust this if your API returns the token differently
  };

  return (
    <div className="bg-neutral-100 rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      <form onSubmit={handleAuth}>
        {!isLogin && (
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-sm font-bold text-neutral-700 block mb-2"
            >
              Name
            </label>
            <div className="flex items-center bg-neutral-200 rounded-lg">
              <UserIcon className="h-5 w-5 text-neutral-500 ml-3" />
              <input
                type="text"
                id="name"
                className="bg-neutral-200 text-neutral-700 py-2 px-4 w-full rounded-lg focus:outline-none"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-sm font-bold text-neutral-700 block mb-2"
          >
            Email
          </label>
          <div className="flex items-center bg-neutral-200 rounded-lg">
            <input
              type="email"
              id="email"
              className="bg-neutral-200 text-neutral-700 py-2 px-4 w-full rounded-lg focus:outline-none"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-sm font-bold text-neutral-700 block mb-2"
          >
            Password
          </label>
          <div className="flex items-center bg-neutral-200 rounded-lg">
            <LockClosedIcon className="h-5 w-5 text-neutral-500 ml-3" />
            <input
              type="password"
              id="password"
              className="bg-neutral-200 text-neutral-700 py-2 px-4 w-full rounded-lg focus:outline-none"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-sm text-neutral-600 mt-4">
        {isLogin ? "No account yet? " : "Already have an account?"}
        <button
          onClick={toggleForm}
          className="text-green-700 font-bold ml-2 hover:underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default Auth;
