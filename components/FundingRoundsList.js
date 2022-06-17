import React from "react";

export default function FundingRoundsList({ fundingRounds }) {
	return (
		<div className=" space-y-4 ">
			{fundingRounds.length > 0 ? (
				fundingRounds.map((fundingRound, index) => (
					<div key={index} className=" p-3 border rounded-md space-y-2">
						<div className=" space-y-1">
							<h4>Amount:</h4>
							<p className=" text-lg font-bold">{fundingRound.amount}</p>
						</div>
						<div className=" space-y-1">
							<h4>Stake:</h4>
							<p className=" text-lg font-bold">{fundingRound.stake}</p>
						</div>

						<div className=" space-y-1">
							<h4>Valuation:</h4>
							<p className=" text-lg font-bold">$6,000,000</p>
						</div>

						<div className=" space-y-1">
							<h4>Shares:</h4>
							<p className=" text-lg font-bold">250,000</p>
						</div>
					</div>
				))
			) : (
				<div className=" py-6 px-4 text-center">There no Funding Rounds</div>
			)}
		</div>
	);
}
