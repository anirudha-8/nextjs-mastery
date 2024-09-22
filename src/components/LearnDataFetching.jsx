async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = res.json();
	return data;
}

const LearnDataFetching = async () => {
	const data = await getData();
	console.log("Data: ", data);
	return (
		<>
			<h1 className="align-center mb-3">Learn Data Fetching</h1>
			{data.map((post, i) => (
				<div key={i}>
					<h1>User Id: {post.userId}</h1>
					<h1>Id: {post.id}</h1>
					<h1>Title: {post.title}</h1>
					<h1>Body: {post.body}</h1>
				</div>
			))}
			<br />
			<hr />
			<br />
		</>
	);
};

export default LearnDataFetching;
