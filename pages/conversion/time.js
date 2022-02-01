const Time = () => {
	return (
		<main className=" bg-black text-white p-3">
			<div className=" p-3 mt-2 bg-gray-800 rounded-lg">
				<h1 className=" font-semibold text-2xl">Time</h1>
			</div>
			<form action="" className="p-3 mt-4 bg-gray-800  rounded-lg">
				{/* the Input */}
				<label htmlFor="" className=" font-semibold inline-block mb-3">
					From:
				</label>{" "}
				<br />
				<div className=" flex w-full">
					<input
						type="text"
						className=" w-full rounded-lg mr-2 p-2 bg-gray-500 focus:ring-4 outline-none ring-purple-500"
					/>
					<select
						name="unit"
						id=""
						className=" rounded-lg  font-semibold bg-gray-500 focus:ring-4 outline-none ring-purple-500 p-3"
					>
						<option value="na">Na</option>
						<option value="na">Na task</option>
						<option value="na">Na</option>
						<option value="na">Na</option>
					</select>
				</div>
				{/* out put */}
				<label htmlFor="" className=" font-semibold inline-block mb-3 mt-8">
					To:
				</label>{" "}
				<br />
				<div className=" flex w-full">
					<input
						type="text"
						className=" w-full rounded-lg mr-2 p-2 bg-gray-500 focus:ring-4 outline-none ring-purple-500"
						disabled
						value="1234.55"
					/>
					<select
						name="unit"
						id=""
						className=" rounded-lg  font-semibold bg-gray-500 focus:ring-4 outline-none ring-purple-500 p-3"
					>
						<option value="na">Na</option>
						<option value="na">Na task</option>
						<option value="na">Na</option>
						<option value="na">Na</option>
					</select>
				</div>
			</form>
		</main>
	);
};

export default Time;
