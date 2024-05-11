// import React from 'react'
// import './login.css';

// const Login = () => {
//   return ( 
//     <section className="h-100 gradient-form" style={{"backgroundColor": "#eee"}}>
//     <div className="container py-5 h-100">
//       <div className="row d-flex justify-content-center align-items-center h-100">
//         <div className="col-xl-10">
//           <div className="card rounded-3 text-black">
//             <div className="row g-0">
//               <div className="col-lg-6">
//                 <div className="card-body p-md-5 mx-md-4">
  
//                   <div className="text-center">
//                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                       style={{"width": "185px","alt":"logo"}}/>
//                     <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
//                   </div>
  
//                   <form>
//                     <p>Please login to your account</p>
  
//                     <div data-mdb-input-init className="form-outline mb-4">
//                       <input type="email" id="form2Example11" className="form-control"
//                         placeholder="Phone number or email address" />
//                       <label className="form-label" htmlFor="form2Example11">Username</label>
//                     </div>
  
//                     <div data-mdb-input-init className="form-outline mb-4">
//                       <input type="password" id="form2Example22" className="form-control" />
//                       <label className="form-label" htmlFor="form2Example22">Password</label>
//                     </div>
  
//                     <div className="text-center pt-1 mb-5 pb-1">
//                       <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
//                         in</button>
//                       <a className="text-muted" href="#!">Forgot password?</a>
//                     </div>
  
//                     <div className="d-flex align-items-center justify-content-center pb-4">
//                       <p className="mb-0 me-2">Don't have an account?</p>
//                       <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Create new</button>
//                     </div>
  
//                   </form>
  
//                 </div>
//               </div>
//               <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
//                 <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                   <h4 className="mb-4">We are more than just a company</h4>
//                   <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default Login;


import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/seedling.png"
            alt="Plant Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="/" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-ABB589 focus:border-ABB589 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-ABB589 focus:border-ABB589 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-ABB589 focus:ring-ABB589 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-ABB589 hover:text-gray-900"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ABB589 hover:bg-ABB677 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ABB589"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-ABB589 group-hover:text-ABB677"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <a href="/" className="font-medium text-ABB589 hover:text-ABB677">
            create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;