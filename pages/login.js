import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // State to store selected role

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/');
    }
    // Extract role from query parameters
    if (router.query.role) {
      setRole(router.query.role);
    }
  }, [router.query.role, router]);

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let response = await res.json();
    setEmail('');
    setPassword('');

    if (response.success) {
      localStorage.setItem('token', response.token);
      console.log(response.token);
      toast.success('Login successful!!');
      setTimeout(() => {
        // Adjust paths based on role
        if (role === 'Volunteer') {
          router.push('/volunteer');
        } else if (role === 'Admin') {
          router.push('/admin'); // Adjust path as needed
        } else if (role === 'General User') {
          router.push('/general-user'); // Adjust path as needed
        } else {
          router.push('/');
        }
      }, 1000);
    } else {
      toast.error(response.error);
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('/volunteer.jpg')] bg-cover bg-center">
    <ToastContainer autoClose={2000} position="bottom-left" />
    
    {/* Form Container */}
    <div className="flex flex-col justify-center items-center px-6 py-12 lg:px-8 relative z-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white bg-opacity-60 rounded-lg shadow-lg p-6">
        <img className="mx-auto h-20 w-auto rounded-full" src="logo.jpg" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input
                value={email}
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <Link href="/forgot" legacyBehavior>
                  <a className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
  
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link href="/signup" legacyBehavior>
            <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  </div>

  );
};

export default Login;
