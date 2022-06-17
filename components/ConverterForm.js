import { useEffect, useState } from "react";
import math, { evaluate, createUnit } from "mathjs";
import AllUnits from "./AllUnits";

export function numberWithSpaces(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const ConverterForm = ({ title, units }) => {
	const [unitsMenu, setUnitsMenu] = useState(false);
	const [input, setInput] = useState("");

	createUnit("mmH20", "0.0000967841 atm", { override: true });
	createUnit("cmH20", "10 mmH20", { override: true });

	// use the first unit from the units props array as the default
	const [from, setFrom] = useState(units[0].symbol);
	const [to, setTo] = useState(units[0].symbol);

	const [output, setOutput] = useState("");

	// round the number to 4 decimal places
	function roundUp(num) {
		var m = Number((Math.abs(num) * 1000).toPrecision(14));
		return (Math.round(m) / 1000) * Math.sign(num);
	}

	const convertNumber = (val = input, fromUnit = from, toUnit = to) => {
		// let i = unit(`${input} ${from}`).toString();
		// let j = i.to(`${to}`);
		let theOutput = evaluate(`${val} ${fromUnit} to ${toUnit}`).toNumber(`${toUnit}`);

		let formattedOutput = numberWithSpaces(roundUp(theOutput));

		setOutput(formattedOutput);
	};

	useEffect(() => {
		// show menu if in large screen
		if (screen.width >= "1000") {
			setUnitsMenu(true);
		}
	}, []);

	return (
		<main className=" bg-black text-white p-3 lg:flex lg:justify-between lg:overflow-auto h-full lg:text-2xl">
			{unitsMenu && (
				<>
					<AllUnits />
					<button
						className=" fixed bottom-5 right-5 z-30 py-2 px-3 my-3 bg-gray-800 rounded-full   text-left lg:hidden font-bold"
						onClick={() => setUnitsMenu(!unitsMenu)}
					>
						X close
					</button>
				</>
			)}

			<button
				className=" p-3 my-3 bg-gray-800 rounded-lg   text-left lg:hidden"
				onClick={() => setUnitsMenu(!unitsMenu)}
			>
				All Conversions
			</button>

			<div className=" lg:min-w-[34px] mr-4">
				<div className=" p-3 mt-2 bg-gray-800 rounded-lg">
					<h1 className=" font-semibold text-2xl">{title}</h1>
				</div>

				<form action="" className="p-4 mt-4 bg-gray-800  rounded-lg ">
					{/* the Input */}
					<label htmlFor="" className=" font-semibold inline-block mb-3">
						From:
					</label>{" "}
					<br />
					<div className=" flex w-full">
						<input
							type="number"
							className=" w-full rounded-lg mr-2 p-2 bg-gray-500 focus:ring-4 outline-none ring-purple-500 font-bold text-2xl text-right"
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
							className=" rounded-lg  font-semibold bg-gray-500 focus:ring-4 outline-none ring-purple-500 p-3 text-sm"
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
							className=" w-full rounded-lg mr-2 p-2 bg-gray-500 focus:ring-4 outline-none ring-purple-500 font-bold text-2xl text-right "
							disabled
							value={output}
							onChange={(e) => setOutput(e.target.value)}
						/>
						<select
							name="unit"
							id=""
							value={to}
							disabled
							onChange={(e) => {
								setTo(e.target.value);

								// set the 'to' unit and leave the others empty
								convertNumber(...[,], ...[,], e.target.value);
							}}
							className=" rounded-lg  font-semibold bg-gray-500 focus:ring-4 outline-none ring-purple-500 p-3 text-sm"
						>
							{units.map((unit, index) => (
								<option key={index} value={unit.symbol}>
									{unit.name}
								</option>
							))}
						</select>
					</div>
				</form>

				{/* all available units aligned horizontally */}
				<div className=" overflow-auto whitespace-nowrap my-5 py-3">
					<h3 className=" font-semibold mb-3 p-2">Pick any unit below:</h3>
					{units.map((unit, index) => (
						<button
							key={index}
							className={
								unit.symbol == to
									? ` bg-purple-700 py-3  px-7 text-center rounded-lg font-semibold mr-3 inline-block`
									: ` bg-gray-700 py-3  px-7 text-center rounded-lg font-semibold mr-3 inline-block`
							}
							onClick={() => {
								// set the 'to' unit and leave the others empty
								setTo(unit.symbol);
								convertNumber(...[,], ...[,], unit.symbol);
							}}
						>
							{unit.name} <br />({unit.symbol})
						</button>
					))}
				</div>
			</div>
			<div className=" p-3 bg-gray-800 rounded-lg lg:max-w-[20rem] lg:text-lg">
				<h2>Math Tips and tricks</h2>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi architecto accusamus deleniti ipsa ullam et,
				nisi veritatis eligendi possimus corporis exercitationem consequuntur omnis, debitis incidunt nemo delectus
				dignissimos eaque.
			</div>
		</main>
	);
};

export default ConverterForm;
