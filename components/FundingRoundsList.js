import React from "react";
import { numberWithSpaces } from "./ConverterForm";

export default function FundingRoundsList({ fundingRounds, removeFundingRound }) {
	return (
		<div className=" space-y-4 ">
			{fundingRounds.length > 0 ? (
				fundingRounds.map((fundingRound, index) => (
					<div key={index} className=" p-3 border border-gray-600 rounded-md space-y-2 relative">
						<button
							onClick={() => removeFundingRound(fundingRound.id)}
							className=" font-bold text-lg p-1 hover:bg-red-500 hover:text-white absolute top-4 right-4"
						>
							X
						</button>
						<div className=" space-y-1">
							<h4>Amount:</h4>
							<p className=" text-lg font-bold">{numberWithSpaces(fundingRound.amount)}</p>
						</div>
						<div className=" space-y-1">
							<h4>Stake:</h4>
							<p className=" text-lg font-bold">{fundingRound.stake}%</p>
						</div>

						<div className=" space-y-1">
							<h4>Valuation:</h4>
							<p className=" text-lg font-bold">$ {numberWithSpaces(fundingRound.valuation)}</p>
						</div>

						<div className=" space-y-1">
							<h4>Shares:</h4>
							<p className=" text-lg font-bold">{numberWithSpaces(fundingRound.sharesIssued)}</p>
						</div>
					</div>
				))
			) : (
				<div className=" py-6 px-4 text-center">You haven&apos;t added any funding rounds </div>
			)}
		</div>
	);
}
