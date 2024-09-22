import Link from "next/link";
import React from "react";

const LearnLink = () => {
	const id = 8;
	return (
		<>
			<Link href="/admin/profile">Admin Profile</Link>
			<Link href="/admin/dashboard">Admin Dashboard</Link>
			<Link href={`user/profile/${id}`}>User Profile</Link>
		</>
	);
};

export default LearnLink;
