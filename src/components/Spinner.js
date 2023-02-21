import React, { Component } from 'react';
import loader from "./loader.gif";
export default class Spinner extends Component {
	render() {
		return <div className='my-3 d-flex align-self-center justify-content-center load' >
            <img src={loader} alt="Loading..." />
        </div>;
	}
}
