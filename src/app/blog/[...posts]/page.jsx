import React from "react";

const page = ({ params }) => {
	// visible only on terminal, not visible in console
	// as it is by default => "server component"
	console.log(params);

	return (
		<>
			<h1>Post Items</h1>
		</>
	);
};

export default page;
