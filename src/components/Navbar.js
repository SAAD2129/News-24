import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<nav className="d-flex py-3 align-items-center navbar-dark bg-dark navbar navbar-text">
				<div className="logo">
					<Link to="#">News 69</Link>
				</div>
				<ul className="d-flex align-items-center m-0">
					<li className="nav-item">
						<Link className="nav-link"  to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/health">
							Health
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/entertainment">
							Entertainment
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/business">
							Business
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/science">
							Science
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/sports">
							Sports
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/technology">
							Technology
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
