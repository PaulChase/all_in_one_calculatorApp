import React from "react";

export default function FoundersList({ founders, getEquity, getAmountOfShares }) {
	return (
		<div className=" space-y-4 ">
			{founders.length > 0 ? (
				founders.map((founder, index) => (
					<div key={index} className=" p-3 border rounded-md space-y-2">
						<div className=" space-y-1">
							<h4>Name:</h4>
							<p className=" text-lg font-bold">{founder.name}</p>
						</div>
						<div className=" space-y-1">
							<h4>Shares:</h4>
							<p className=" text-lg font-bold">{getAmountOfShares()}</p>
						</div>

						<div className=" space-y-1">
							<h4>Stake:</h4>
							<p className=" text-lg font-bold">{getEquity()}%</p>
						</div>

						<div className=" space-y-1">
							<h4>Net worth:</h4>
							<p className=" text-lg font-bold">$2,000,000</p>
						</div>
					</div>
				))
			) : (
				<div className=" py-6 px-4 text-center">There no Founders</div>
			)}
		</div>
	);
}
