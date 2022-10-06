import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const classes = "mx-5 duration-500 rounded ease-in-out px-5 py-2 uppercase";
	return (
		<div>
			<nav className="flex justify-center text-white py-3  bg-sky-500 ">
				<NavLink
					className={({ isActive }) =>
						[classes, isActive ? "bg-sky-600" : null].filter(Boolean).join(" ")
					}
					to="/home"
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						[classes, isActive ? "bg-sky-600" : null].filter(Boolean).join(" ")
					}
					to="/about"
				>
					about
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						[classes, isActive ? "bg-sky-600" : null].filter(Boolean).join(" ")
					}
					to="/products"
				>
					products
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						[classes, isActive ? "bg-sky-600" : null].filter(Boolean).join(" ")
					}
					to="/friends"
				>
					friends
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
