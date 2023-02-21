import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/Navbar";
import News from "./components/NewsBox";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
export default class App extends Component {
    pagesize = 10;
    state = {
        progress: 0,
    };
    setProgress = (progress) => {
        this.setState({ progress: progress });
    };
    render() {
        return (
            <>
                <Router>
                    <NavBar />
                    <LoadingBar
                        height={4}
                        color="#f11946"
                        progress={this.state.progress}
                    />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    country="us"
                                    pagesize={this.pagesize}
                                    key="general"
                                    category="general"
                                />
                            }
                        />
                        <Route exact path="/login" element={<Login />} />
                        <Route
                            exact
                            path="/health"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    country="us"
                                    pagesize={this.pagesize}
                                    key="health"
                                    category="health"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    country="us"
                                    pagesize={this.pagesize}
                                    key="entertainment"
                                    category="entertainment"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/business"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    country="us"
                                    pagesize={this.pagesize}
                                    key="business"
                                    category="business"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/science"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    country="us"
                                    pagesize={this.pagesize}
                                    key="science"
                                    category="science"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/sports"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    country="us"
                                    pagesize={this.pagesize}
                                    key="sports"
                                    category="sports"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/technology"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    country="us"
                                    pagesize={this.pagesize}
                                    key="technology"
                                    category="technology"
                                />
                            }
                        />
                    </Routes>
                </Router>
                <button className="totop">
                    <i className="uil fs-2 uil-left-arrow"></i>
                </button>
            </>
        );
    }
}
