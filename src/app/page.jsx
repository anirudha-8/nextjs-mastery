import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnUseRouterHook from "@/components/LearnUseRouterHook";

export default function Home() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<h1>Welcome to Next App</h1>
			{/* <LearnLink /> */}
			{/* <LearnUseRouterHook /> */}
			<LearnDataFetching />
		</main>
	);
}
