import React from "react";
import { numberWithSpaces } from "./ConverterForm";

export default function FoundersList({
	founders,
	eachFoundersShares,
	eachFoundersStake,
	eachFoundersNetWorth,
	removeFounder,
}) {
	return (
		<div className=" space-y-4 ">
			{founders.length > 0 ? (
				founders.map((founder, index) => (
					<div key={index} className=" p-3 border border-gray-600 rounded-md space-y-2 relative">
						{/* <button
							onClick={() => removeFounder(founder.id)}
							className=" font-bold text-lg p-1 hover:bg-red-500 hover:text-white absolute top-4 right-4"
						>
							X
						</button> */}

						<div className=" space-y-1">
							<h4>Name:</h4>
							<p className=" text-lg font-bold">{founder.name}</p>
						</div>
						<div className=" space-y-1">
							<h4>Shares:</h4>
							<p className=" text-lg font-bold">{numberWithSpaces(eachFoundersShares)}</p>
						</div>

						<div className=" space-y-1">
							<h4>Stake:</h4>
							<p className=" text-lg font-bold">{eachFoundersStake}%</p>
						</div>

						<div className=" space-y-1">
							<h4>Net worth:</h4>
							<p className=" text-lg font-bold">
								$ {isNaN(eachFoundersNetWorth) ? 0 : numberWithSpaces(eachFoundersNetWorth)}
							</p>
						</div>
					</div>
				))
			) : (
				<div className=" py-6 px-4 text-center">You haven&apos;t added any founder </div>
			)}
		</div>
	);
}
