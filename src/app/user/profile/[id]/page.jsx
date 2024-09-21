import React from "react";

const page = ({ params }) => {
	// unable to see on console, as it is by default => "server component"
	console.log(params);

	return (
		<>
			<h1>User Profile</h1>
			<hr />
			<p>Id of the user: {params.id}</p>
		</>
	);
};

export default page;
