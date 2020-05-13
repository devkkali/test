import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<header className="header_area">
				<div className="top_menu row m0">
					<div className="container">
						<div className="float-left">
							<ul className="list header_social">
								<li>
									<a href="#">Contact Us +44 (012) 5689 3264</a>
								</li>
							</ul>
						</div>
						<div className="float-right">
							<select>
								<option value={1}>USD</option>
								<option value={1}>EUR</option>
								<option value={1}>AOA</option>
								<option value={1}>AUD</option>
							</select>
							<select>
								<option value={1}>ENG</option>
								<option value={1}>FRA</option>
								<option value={1}>BAN</option>
							</select>
						</div>
					</div>
				</div>
				<div className="main_menu">
					<nav className="navbar navbar-expand-lg navbar-light">
						<div className="container">
							{/* Brand and toggle get grouped for better mobile display */}
							<a className="navbar-brand logo_h" href="index.html">
								<img src="img/logo.png" alt="" />
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</button>
							{/* Collect the nav links, forms, and other content for toggling */}
							<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
								<ul className="nav navbar-nav menu_nav ml-auto">
									<li className="nav-item active">
										<a className="nav-link" href="index.html">
											Home
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="about-us.html">
											About
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="gallery.html">
											Gallery
										</a>
									</li>
									<li className="nav-item submenu dropdown">
										<a
											href="#"
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Pages
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<a className="nav-link" href="elements.html">
													Elements
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="rooms.html">
													Rooms
												</a>
											</li>
										</ul>
									</li>
									<li className="nav-item submenu dropdown">
										<a
											href="#"
											className="nav-link dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Blog
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<a className="nav-link" href="blog.html">
													Blog
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="single-blog.html">
													Blog Details
												</a>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="contact">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		);
	}
}

export default Navbar;
