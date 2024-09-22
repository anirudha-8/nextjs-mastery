"use client";

import { useRouter } from "next/navigation";

const LearnUseRouterHook = () => {
	const router = useRouter();
	console.log("Router: ", router);
	const id = 8;
	return (
		<>
			<h1>Learn "useRouter" Hook</h1>
			<button type="button" onClick={() => router.push("/admin/profile")}>
				Goto Admin Profile
			</button>
			<button
				type="button"
				onClick={() => router.push(`/user/profile/${id}`)}
			>
				Goto User Profile
			</button>
		</>
	);
};

export default LearnUseRouterHook;
