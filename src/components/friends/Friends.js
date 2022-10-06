import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../friend/Friend";

const Friends = () => {
	const users = useLoaderData();
	return (
		<div>
			<h1 className="text-4xl font-semibold text-center mt-5 capitalize">
				I have so many friends {users.length}
			</h1>
			<div className="grid grid-cols-3 gap-4 mx-5">
				{users.map((user) => (
					<Friend friend={user} />
				))}
			</div>
		</div>
	);
};

export default Friends;
