import React, { useState } from "react";
import AddFounder from "../components/AddFounder";
import AddFundingRound from "../components/AddFundingRound";
import Button from "../components/Button";
import Card from "../components/Card";
import { numberWithSpaces } from "../components/ConverterForm";
import FoundersList from "../components/FoundersList";
import FundingRoundsList from "../components/FundingRoundsList";

const TOTAL_PERCENTAGE = 100;
const INITIAL_NO_OF_SHARES = 1000000;

export default function Equity() {
	const [currentTab, setCurrentTab] = useState("founders");
	const [showAddFounder, setShowAddFounder] = useState(false);
	const [showAddFundingRound, setShowAddFundingRound] = useState(false);
	const [founders, setFounders] = useState([]);
	const [fundingRounds, setFundingRounds] = useState([]);

	const handleAddFounder = (founder) => {
		let foundersList = [...founders];

		foundersList.push(founder);

		setFounders(foundersList);
	};

	const handleAddFundingRound = (round) => {
		let fundingRoundsList = [...fundingRounds];

		fundingRoundsList.push(round);

		setFundingRounds(fundingRoundsList);
	};

	const getEquity = () => {
		let foundersEquity = TOTAL_PERCENTAGE / founders.length;
		return Math.abs(foundersEquity).toFixed(2);
	};

	const getAmountOfShares = () => {
		let foundersShares = INITIAL_NO_OF_SHARES / founders.length;

		return numberWithSpaces(foundersShares.toFixed(2));
	};

	return (
		<main className=" bg-black p-4 text-white">
			<Card>
				<h2 className=" text-xl font-semibold">Company Shares & Equity Calculator</h2>
			</Card>

			<Card>
				<div className=" space-y-4">
					<h3 className=" text-lg font-semibold mb-4">Company Profile</h3>
					<div className=" space-y-2">
						<h4>Name:</h4>
						<p className=" text-lg font-bold">Founders Hub</p>
					</div>

					<div className=" space-y-2">
						<h4>Founders:</h4>
						<p className=" text-lg font-bold">{founders.length} founders</p>
					</div>

					<div className=" space-y-2">
						<h4>Total Shares:</h4>
						<p className=" text-2xl font-bold">1,300,000</p>
					</div>

					<div className=" space-y-2">
						<h4>Share price:</h4>
						<p className=" text-2xl font-bold">$5.00</p>
					</div>

					<div className=" space-y-2">
						<h4>Valuation:</h4>
						<p className=" text-2xl font-bold">$5,000,000.00</p>
					</div>
				</div>
			</Card>

			<Card>
				<div className=" grid grid-cols-2 gap-x-6">
					<Button text="Add Founders" onClick={() => setShowAddFounder(!showAddFounder)} />
					<Button text="Add funding round" onClick={() => setShowAddFundingRound(!showAddFundingRound)} />
				</div>
			</Card>

			{showAddFounder && (
				<AddFounder submitFounder={handleAddFounder} closeForm={() => setShowAddFounder(!showAddFounder)} />
			)}

			{showAddFundingRound && (
				<AddFundingRound
					submitFundingRound={handleAddFundingRound}
					closeForm={() => setShowAddFundingRound(!showAddFundingRound)}
				/>
			)}

			<Card>
				<div>
					<div className=" grid grid-cols-2 gap-x-6 font-semibold p-3">
						<button onClick={() => setCurrentTab("founders")}>Founders</button>
						<button onClick={() => setCurrentTab("funding")}>Funding Rounds</button>
					</div>
					<div>
						{currentTab === "founders" && (
							<FoundersList founders={founders} getEquity={getEquity} getAmountOfShares={getAmountOfShares} />
						)}
						{currentTab === "funding" && <FundingRoundsList fundingRounds={fundingRounds} />}
					</div>
				</div>
			</Card>
		</main>
	);
}
