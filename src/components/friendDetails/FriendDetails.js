import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
	const friend = useLoaderData();
	const { name, email, phone } = friend;
	return (
		<div className="w-1/3 mx-auto mt-10">
			<h1 className="text-4xl font-bold">{name}</h1>
			<p className="text-2xl my-2">
				<b>Email:</b> {email}
			</p>
			<p className="text-2xl my-2">
				<b>Phone:</b> {phone}
			</p>
		</div>
	);
};

export default FriendDetails;
