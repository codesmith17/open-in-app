import React from "react";
import Logo from "./Logo";

import "./Login.css";
import Apple from "./Apple";
import Google from "./Google";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsername = (e) => {
    const enteredEmail = e.target.value;
    setUsername(enteredEmail);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(enteredEmail)) {
      setUsernameError("Please enter a valid email address.");
    } else {
      setUsernameError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Check if fields are empty
    if (username === "") {
      alert("Please enter your email address.");
      return;
    }

    if (password === "") {
      setPasswordError("Please enter your password.");
      return;
    }

    // Check username and password
    if (username === "johndoe@gmail.com" && password === "123") {
    } else {
      // Display error for invalid credentials
      setUsernameError("Invalid username or password.");
      setPasswordError("Invalid username or password.");
    }
  };

  // Use useEffect to log the updated usernameError
  useEffect(() => {
    console.log(usernameError);
  }, [usernameError]);
  return (
    <>
      <div className="block md:hidden overflow-hidden max-w-[100vw]">
        <nav className="h-[100px] bg-[#605bff] flex items-center justify-between">
          <div className="flex items-center">
            <div className="my-6 pr-4">
              <Logo />
            </div>
            <p className="text-white text-lg font-bold">Base</p>
          </div>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row bg-[#f8faff]">
        <div className="leftArea hidden md:block relative bg-[#605BFF] h-screen md:w-1/2 overflow-hidden">
          <div title="OpenInApp" className="logo m-11">
            <Logo></Logo>
          </div>
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl font-semibold font-mono text-white transform ">
            BASE
          </div>
          <div
            title="social-media-apps"
            className="social-media-icons grid grid-flow-col grid-cols-4 w-fit mx-auto place-items-center gap-8 absolute bottom-4 left-[45%] translate-x-[-50%] "
          >
            <svg
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-rotate-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4606 0.00013472C17.2463 0.000855345 12.2023 1.90663 8.2309 5.37654C4.25953 8.84645 1.61984 13.6541 0.784038 18.9396C-0.0517666 24.225 0.970836 29.6435 3.66892 34.2256C6.367 38.8077 10.5646 42.2546 15.5107 43.9497C16.6089 44.1592 17.0795 43.4664 17.0795 42.8703V39.036C10.9768 40.3893 9.69038 36.0072 9.69038 36.0072C9.26123 34.6263 8.35801 33.4525 7.14889 32.7046C5.15649 31.319 7.30577 31.3352 7.30577 31.3352C8.00171 31.4361 8.66598 31.6991 9.24784 32.1039C9.82969 32.5088 10.3138 33.0449 10.6631 33.6712C11.2707 34.7904 12.2864 35.6161 13.4867 35.9665C14.687 36.317 15.9737 36.1635 17.0638 35.54C17.1524 34.3969 17.6432 33.326 18.4444 32.5273C13.5811 31.9474 8.45101 30.0141 8.45101 21.3788C8.41545 19.1361 9.2248 16.9659 10.7101 15.3213C10.0378 13.3787 10.1164 11.2453 10.9298 9.36036C10.9298 9.36036 12.7653 8.74816 16.9697 11.6642C20.5646 10.6572 24.3565 10.6572 27.9515 11.6642C32.1402 8.74816 33.9757 9.36036 33.9757 9.36036C34.7891 11.2453 34.8677 13.3787 34.1954 15.3213C35.6807 16.9659 36.49 19.1361 36.4545 21.3788C36.4545 30.0463 31.3244 31.9474 26.4297 32.5112C26.954 33.057 27.3584 33.7118 27.6154 34.4316C27.8725 35.1514 27.9764 35.9194 27.9201 36.6839V42.8703C27.9201 43.6114 28.3123 44.1753 29.4889 43.9497C34.4415 42.2525 38.6434 38.799 41.3411 34.2084C44.0388 29.6178 45.0557 24.1905 44.2096 18.8997C43.3635 13.6089 40.7097 8.80065 36.7241 5.33719C32.7384 1.87373 27.6817 -0.0183883 22.4606 0.00013472Z"
                fill="white"
              />
            </svg>
            <svg
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform -rotate-1"
            >
              <path
                d="M21.8334 0.5C10.2365 0.5 0.833374 9.67924 0.833374 21C0.833374 32.3208 10.2365 41.5 21.8334 41.5C33.4302 41.5 42.8334 32.3208 42.8334 21C42.8334 9.67924 33.4302 0.5 21.8334 0.5ZM31.9256 15.9528C31.9396 16.1679 31.9396 16.3921 31.9396 16.6117C31.9396 23.3291 26.699 31.067 17.1224 31.067C14.1693 31.067 11.4318 30.2296 9.12556 28.7882C9.54744 28.8339 9.95056 28.8522 10.3818 28.8522C12.8193 28.8522 15.0599 28.0469 16.8459 26.6833C14.5584 26.6375 12.6365 25.1732 11.9802 23.1598C12.7818 23.2742 13.5037 23.2742 14.3287 23.0683C13.1508 22.8347 12.0922 22.2102 11.3325 21.301C10.5729 20.3918 10.1591 19.2539 10.1615 18.0806V18.0165C10.8506 18.3963 11.6615 18.6297 12.5099 18.6617C11.7967 18.1977 11.2118 17.569 10.807 16.8315C10.4023 16.094 10.1902 15.2703 10.1896 14.4336C10.1896 13.4864 10.4427 12.6215 10.8974 11.8711C12.2048 13.4422 13.8362 14.7271 15.6856 15.6424C17.5349 16.5577 19.5609 17.0828 21.6318 17.1837C20.8959 13.7289 23.5396 10.933 26.7178 10.933C28.2178 10.933 29.5677 11.5462 30.5193 12.5346C31.6959 12.3195 32.8209 11.8894 33.824 11.3128C33.4349 12.4888 32.6193 13.4818 31.5365 14.1087C32.5865 13.9989 33.599 13.7152 34.5365 13.3171C33.8287 14.3329 32.9427 15.2344 31.9256 15.9528Z"
                fill="white"
              />
            </svg>
            <svg
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform -rotate-1"
            >
              <path
                d="M39.4666 6H8.86663C7.36663 6 6.16663 7.2 6.16663 8.55V39.3C6.16663 40.65 7.36663 41.85 8.86663 41.85H39.4666C40.9666 41.85 42.1666 40.65 42.1666 39.3V8.55C42.1666 7.2 40.9666 6 39.4666 6ZM16.8166 36.6H11.5666V19.5H16.8166V36.6ZM14.2666 17.1C12.6166 17.1 11.1166 15.75 11.1166 13.95C11.1166 12.15 12.4666 10.8 14.2666 10.8C15.9166 10.8 17.4166 12.15 17.4166 13.95C17.4166 15.75 15.9166 17.1 14.2666 17.1ZM36.9166 36.45H31.6666V28.05C31.6666 26.1 31.6666 23.4 28.8166 23.4C25.9666 23.4 25.6666 25.65 25.6666 27.75V36.3H20.4166V19.5H25.3666V21.75H25.5166C26.2666 20.4 28.0666 18.9 30.6166 18.9C36.0166 18.9 37.0666 22.5 37.0666 27.15V36.45H36.9166Z"
                fill="white"
              />
            </svg>
            <svg
              width="51"
              height="48"
              viewBox="0 0 51 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-5"
            >
              <path
                d="M21.8235 22.3605C21.3695 22.3237 20.9145 22.4192 20.5181 22.6348C20.1216 22.8503 19.8022 23.1757 19.6015 23.5683C19.4009 23.961 19.3285 24.4027 19.3936 24.8356C19.4588 25.2685 19.6587 25.6724 19.9669 25.9944C20.2752 26.3165 20.6776 26.5417 21.1214 26.6406C21.5652 26.7394 22.0297 26.7074 22.4543 26.5486C22.8788 26.3898 23.2435 26.1117 23.5006 25.7506C23.7577 25.3896 23.8953 24.9624 23.8954 24.525C23.9075 24.2523 23.8636 23.9799 23.766 23.7234C23.6684 23.467 23.5192 23.2315 23.3267 23.0305C23.1343 22.8295 22.9025 22.6668 22.6446 22.5519C22.3866 22.4369 22.1076 22.3719 21.8235 22.3605ZM29.2376 22.3605C28.7836 22.3237 28.3286 22.4192 27.9321 22.6348C27.5357 22.8503 27.2162 23.1757 27.0156 23.5683C26.815 23.961 26.7425 24.4027 26.8077 24.8356C26.8729 25.2685 27.0727 25.6724 27.381 25.9944C27.6893 26.3165 28.0916 26.5417 28.5354 26.6406C28.9792 26.7394 29.4438 26.7074 29.8683 26.5486C30.2928 26.3898 30.6575 26.1117 30.9147 25.7506C31.1718 25.3896 31.3094 24.9624 31.3094 24.525C31.3216 24.2523 31.2776 23.9799 31.1801 23.7234C31.0825 23.467 30.9332 23.2315 30.7408 23.0305C30.5484 22.8295 30.3166 22.6668 30.0586 22.5519C29.8007 22.4369 29.5217 22.3719 29.2376 22.3605Z"
                fill="white"
              />
              <path
                d="M39.1094 6H11.8906C11.3424 6.00118 10.7999 6.10603 10.2939 6.30856C9.78791 6.51109 9.32845 6.80734 8.94176 7.18037C8.55507 7.5534 8.24873 7.99591 8.04022 8.48263C7.83172 8.96935 7.72514 9.49073 7.72658 10.017V36.381C7.72514 36.9073 7.83172 37.4287 8.04022 37.9154C8.24873 38.4021 8.55507 38.8446 8.94176 39.2176C9.32845 39.5907 9.78791 39.8869 10.2939 40.0894C10.7999 40.292 11.3424 40.3968 11.8906 40.398H34.925L33.8485 36.7905L36.4485 39.111L38.9063 41.295L43.2735 45V10.017C43.2749 9.49073 43.1683 8.96935 42.9598 8.48263C42.7513 7.99591 42.445 7.5534 42.0583 7.18037C41.6716 6.80734 41.2121 6.51109 40.7062 6.30856C40.2002 6.10603 39.6576 6.00118 39.1094 6ZM31.2688 31.467C31.2688 31.467 30.5375 30.6285 29.9281 29.8875C31.4005 29.5547 32.7028 28.7327 33.6047 27.567C32.8738 28.0339 32.0902 28.4199 31.2688 28.7175C30.3238 29.1047 29.3355 29.3861 28.3235 29.556C26.5838 29.8635 24.7997 29.8569 23.0625 29.5365C22.0427 29.3449 21.0432 29.0643 20.0766 28.698C19.5671 28.5099 19.0716 28.2884 18.5938 28.035C18.5328 27.996 18.4719 27.9765 18.411 27.9375C18.3804 27.9229 18.3529 27.9031 18.3297 27.879C18.1348 27.7771 17.9451 27.6664 17.761 27.5475C18.6302 28.6888 19.8876 29.5027 21.3156 29.8485C20.7063 30.5895 19.9547 31.467 19.9547 31.467C18.7481 31.4982 17.552 31.2442 16.4717 30.7274C15.3913 30.2105 14.4599 29.4466 13.7594 28.503C13.8253 24.5498 14.8255 20.6626 16.6844 17.1345C18.3202 15.9011 20.3146 15.1856 22.3922 15.087L22.5953 15.321C20.6407 15.7854 18.8167 16.6575 17.2531 17.8755C17.2531 17.8755 17.7 17.6415 18.4516 17.31C19.9117 16.6702 21.4678 16.2556 23.0625 16.0815C23.1762 16.0589 23.2918 16.0459 23.4078 16.0425C24.769 15.8723 26.1465 15.8592 27.511 16.0035C29.6566 16.2387 31.7337 16.8747 33.625 17.8755C32.1407 16.7156 30.4167 15.8715 28.5672 15.399L28.8516 15.087C30.9291 15.1856 32.9235 15.9011 34.5594 17.1345C36.4183 20.6626 37.4184 24.5498 37.4844 28.503C36.7782 29.4457 35.8428 30.2085 34.7595 30.7251C33.6763 31.2416 32.4779 31.4963 31.2688 31.467Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center bg-[#f8faff] justify-center h-screen mx-auto border-spacing-8 w-[80%] lg:w-[50%] rounded-lg">
          <div className="rightArea relative   p-8">
            <div>
              <h4 className="text-3xl font-bold mb-4 px-9">Sign In</h4>
              <p className=" px-9">Sign in to your account</p>
              <div className="flex flex-row w-full justify-center">
                <button className="mx-auto my-2">
                  <Google></Google>
                </button>
                <button className="mx-auto my-2">
                  <Apple></Apple>
                </button>
              </div>
              <div className="login-container mt-4 bg-white p-10 rounded-md">
                <label htmlFor="emailInput">Email address</label>
                <br />
                <input
                  type="email"
                  onChange={handleUsername}
                  className={`bg-[#f5f5f5] rounded-md my-2 p-2 w-full  ${
                    usernameError && "border-red-500"
                  }`}
                />
                {usernameError && (
                  <p className="text-red-500 text-sm">{usernameError}</p>
                )}

                <br />
                <label htmlFor="passwordInput">Password</label>
                <br />
                <input
                  type="password"
                  onChange={handlePassword}
                  className={`bg-[#f5f5f5] rounded-md my-2 p-2 w-full ${
                    passwordError && "border-red-500"
                  }`}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
                <a
                  href="#"
                  className="text-blue-600 underline-on-hover  my-4 block w-fit"
                  target="_blank"
                  title="Easy to get a new password!"
                >
                  Forgot password?
                </a>
                <Link to="/dashboard">
                  <button
                    onClick={handleSignIn}
                    disabled={!username || !password}
                    className={`rounded-md my-8 px-4 w-full py-3 transition-all font-semibold ${
                      !username || !password
                        ? "text-gray-500 bg-[#f8faff] cursor-not-allowed"
                        : "text-white hover:bg-[#343275] bg-[#605BFF] hover:cursor-pointer"
                    }`}
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
