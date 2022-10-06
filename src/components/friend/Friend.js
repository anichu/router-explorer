import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
	const { id, name, email, username } = friend;
	return (
		<div className="flex-row items-center text-center my-4 shadow-md rounded-md text-white p-4 bg-teal-600 w-full mx-auto">
			<h3 className="text-2xl py-3">{name}</h3>
			<p>
				<b>Email: </b>
				{email}
			</p>
			<p>
				<b>userName: </b>
				<Link to={`/friend/${id}`}> {username}</Link>
			</p>
		</div>
	);
};

export default Friend;
