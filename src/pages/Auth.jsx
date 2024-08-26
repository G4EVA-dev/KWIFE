import { useState } from 'react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-neutral-100 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-bold text-neutral-700 block mb-2">
                Name
              </label>
              <div className="flex items-center bg-neutral-200 rounded-lg">
                <UserIcon className="h-5 w-5 text-neutral-500 ml-3" />
                <input
                  type="text"
                  id="name"
                  className="bg-neutral-200 text-neutral-700 py-2 px-4 w-full rounded-lg focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-bold text-neutral-700 block mb-2">
              Email
            </label>
            <div className="flex items-center bg-neutral-200 rounded-lg">
              
              <input
                type="email"
                id="email"
                className="bg-neutral-200 text-neutral-700 py-2 px-4 w-full rounded-lg focus:outline-none"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-bold text-neutral-700 block mb-2">
              Password
            </label>
            <div className="flex items-center bg-neutral-200 rounded-lg">
              <LockClosedIcon className="h-5 w-5 text-neutral-500 ml-3" />
              <input
                type="password"
                id="password"
                className="bg-neutral-200 text-neutral-700 py-2 px-4 w-full rounded-lg focus:outline-none"
                placeholder="Your Password"
              />
            </div>
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="confirm-password" className="text-sm font-bold text-neutral-700 block mb-2">
                Confirm Password
              </label>
              <div className="flex items-center bg-neutral-200 rounded-lg">
                <LockClosedIcon className="h-5 w-5 text-neutral-500 ml-3" />
                <input
                  type="password"
                  id="confirm-password"
                  className="bg-neutral-200 text-neutral-700 py-2 px-4 w-full rounded-lg focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-600 mt-4">
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
          <button
            onClick={toggleForm}
            className="text-green-700 font-bold ml-2 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
