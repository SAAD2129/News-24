import React, { useState } from "react";
import "../Login.css";

const host = "http://localhost:80/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LogInUser = async (e) => {
        e.preventDefault();
        let url = `${host}/login`
        
        const response = await fetch(`http://localhost:5000/api/login`, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log(data);
        // if()
        // todo
        /*
        if success
        then navigate to home
        and set Nav to show
        
         */
    };
    return (
        <div className="container width-50 m-auto">
            {/* LOGIN PAGE MAIN GRID  */}
            <div className="grid mt-2 gtc-2 gap-2">
                <div className="left flex">
                    <div className="img-1">
                        <img width="100%" src="./assets/Login.png" alt="" />
                    </div>
                </div>
                <div className=" right">
                    <div className="card">
                        <h2 className="my-2 med-font heading-logo">
                            Instagram
                        </h2>
                        <form onSubmit={LogInUser}>
                            <input
                                className="input"
                                type="text"
                                placeholder="Phone number,username or email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button
                                type="submit"
                                className="btn mt-1 rounded-6 max"
                            >
                                Log In
                            </button>
                        </form>
                        <p className="my-1">
                            <b className="color-gray style my-2">OR</b>
                        </p>
                        <div className="my-1">
                            <a href="/facebook.com" className="main-color ">
                                Login with Facebook
                            </a>
                        </div>
                        <a href="/">Forgot Password ?</a>
                    </div>
                    <div className="card">
                        <p>
                            Don't have an Account ?{" "}
                            <a href="/register" className="main-color">
                                Sign Up
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className="my-min">Get the app</p>
                        <div className="flex gap-2 content-center item-center">
                            <img src="./assets/playstore.png" alt="" />
                            <img src="./assets/micro.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR WHICH CONTAIN IMPORTANT LINKS */}
            <div className="mt-3">
                <ul className="flex gap-1 bottom-bar">
                    <li>
                        <a href="#">Meta</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Jobs</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">API</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li>
                        <a href="#">Terms</a>
                    </li>
                    <li>
                        <a href="#">Top Accounts</a>
                    </li>
                    <li>
                        <a href="#">Hashtags</a>
                    </li>
                    <li>
                        <a href="#">Locations</a>
                    </li>
                    <li>
                        <a href="#">Instagram lite</a>
                    </li>
                    <li>
                        <a href="#">Contact Uploading & Non Users</a>
                    </li>
                    <li>
                        <a href="#">English</a>
                    </li>
                    <li>
                        <p>
                            &copy; {new Date().getFullYear()} Instagram by SAAD
                            made with <span className="main-color">♥</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Login;
