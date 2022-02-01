import { evaluate } from "mathjs";
import { useState } from "react";

const Distance = () => {
	const [input, setInput] = useState("");
	const [from, setFrom] = useState("m");
	const [to, setTo] = useState("m");
	const [output, setOutput] = useState("");

	// the units of measurement
	const units = [
		{
			name: "meters",
			symbol: "m",
		},
		{
			name: "kilometer",
			symbol: "km",
		},
		{
			name: "inches",
			symbol: "in",
		},
		{
			name: "feet",
			symbol: "ft",
		},
		{
			name: "yards",
			symbol: "yd",
		},
		{
			name: "miles",
			symbol: "mi",
		},
		{
			name: "Link",
			symbol: "li",
		},
		{
			name: "rod",
			symbol: "rd",
		},
	];

	// round the number to 4 decimal places
	function roundUp(num) {
		var m = Number((Math.abs(num) * 10000).toPrecision(14));
		return (Math.round(m) / 10000) * Math.sign(num);
	}

	function numberWithSpaces(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	const convertNumber = (val = input, fromUnit = from, toUnit = to) => {
		// let i = unit(`${input} ${from}`).toString();
		// let j = i.to(`${to}`);
		let theOutput = evaluate(`${val} ${fromUnit} to ${to}`).toNumber(`${toUnit}`);

		setOutput(numberWithSpaces(roundUp(theOutput)));
	};

	return (
		<main className=" bg-black text-white p-3">
			{/* <button>testing</button> */}

			<div className=" p-3 mt-2 bg-gray-800 rounded-lg">
				<h1 className=" font-semibold text-2xl">Distance</h1>
			</div>

			<form action="" className="p-4 mt-4 bg-gray-800  rounded-lg">
				{/* the Input */}
				<label htmlFor="" className=" font-semibold inline-block mb-3">
					From:
				</label>{" "}
				<br />
				<div className=" flex w-full">
					<input
						type="number"
						className=" w-full rounded-lg mr-2 p-2 bg-gray-500 focus:ring-4 outline-none ring-purple-500 font-bold text-2xl"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);

							// set the initial value and leave the others empty
							convertNumber(e.target.value);
						}}
					/>
					<select
						name="unit"
						id=""
						value={from}
						onChange={(e) => {
							setFrom(e.target.value);

							// set the 'from' unit and leave the others empty
							convertNumber(...[,], e.target.value, ...[,]);
						}}
						className=" rounded-lg  font-semibold bg-gray-500 focus:ring-4 outline-none ring-purple-500 p-3"
					>
						{units.map((unit, index) => (
							<option key={index} value={unit.symbol}>
								{unit.name}
							</option>
						))}
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
						className=" w-full rounded-lg mr-2 p-2 bg-gray-500 focus:ring-4 outline-none ring-purple-500 font-bold text-2xl"
						disabled
						value={output}
						onChange={(e) => setOutput(e.target.value)}
					/>
					<select
						name="unit"
						id=""
						value={to}
						onChange={(e) => {
							setTo(e.target.value);

							// set the 'to' unit and leave the others empty
							convertNumber(...[,], ...[,], e.target.value);
						}}
						className=" rounded-lg  font-semibold bg-gray-500 focus:ring-4 outline-none ring-purple-500 p-3"
					>
						{units.map((unit, index) => (
							<option key={index} value={unit.symbol}>
								{unit.name}
							</option>
						))}
					</select>
				</div>
			</form>
		</main>
	);
};

export default Distance;
