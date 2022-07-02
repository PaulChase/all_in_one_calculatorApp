import { number } from "mathjs";
import React, { useEffect, useState } from "react";
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
	const [totalCompanyShares, settotalCompanyShares] = useState(INITIAL_NO_OF_SHARES);
	const [companyValuation, setCompanyValuation] = useState(0);
	const [eachFoundersStake, setEachFoundersStake] = useState(0);
	const [eachFoundersNetWorth, setEachFoundersWorth] = useState(0);
	const [eachFoundersShares, setEachFoundersShares] = useState(0);
	const [companySharePrice, setCompanySharePrice] = useState(0);
	const [newFundinground, setNewFundinground] = useState({});

	const handleAddFounder = (founder) => {
		let foundersList = [...founders];

		foundersList.unshift(founder);

		setFounders(foundersList);
	};

	const handleRemoveFounder = (founderId) => {
		const newFoundersList = founders.filter((founder) => founder.id !== founderId);

		setFounders(newFoundersList);
	};

	const handleAddFundingRound = (round) => {
		let postCompanyValuation = (number(round.amount) * TOTAL_PERCENTAGE) / number(round.stake);

		let newCompanyValuation = companyValuation + postCompanyValuation;

		let newSharesIssued = totalCompanyShares * (number(round.amount) / number(postCompanyValuation));

		let newTotalCompanyShares = totalCompanyShares + newSharesIssued;

		settotalCompanyShares(newTotalCompanyShares);

		round.stake = Math.abs(round.stake);
		round.valuation = newCompanyValuation;
		round.sharesIssued = newSharesIssued;

		let fundingRoundsList = [...fundingRounds];

		fundingRoundsList.unshift(round);

		setNewFundinground(round);

		setFundingRounds(fundingRoundsList);
	};

	const handleRemoveFundingRound = (fundingRoundId) => {
		const newFundingRoundsList = fundingRounds.filter((fundingRound) => fundingRound.id !== fundingRoundId);

		setFundingRounds(newFundingRoundsList);
	};

	const getFoundersStake = () => {
		let totalSharesGivenToInvestors = 0;

		fundingRounds.forEach((fundingRound) => (totalSharesGivenToInvestors += number(fundingRound.stake)));

		let availableSHaresForFounders = TOTAL_PERCENTAGE - totalSharesGivenToInvestors;

		let foundersEquity = availableSHaresForFounders / founders.length;

		setEachFoundersStake(foundersEquity.toFixed(2));
	};

	const getAmountOfShares = () => {
		let foundersShares = INITIAL_NO_OF_SHARES / founders.length;
		setEachFoundersShares(foundersShares.toFixed(2));
	};

	useEffect(() => {
		getFoundersStake();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [founders, fundingRounds]);

	useEffect(() => {
		console.log("changed");
		let newCompanySharePrice = companyValuation / totalCompanyShares;

		setCompanySharePrice(newCompanySharePrice.toFixed(2));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [companyValuation]);

	useEffect(() => {
		getAmountOfShares();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [founders]);

	useEffect(() => {
		let newFoundersNetWorth = number(companySharePrice) * number(eachFoundersShares);

		setEachFoundersWorth(newFoundersNetWorth.toFixed(2));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [companySharePrice, eachFoundersShares]);

	useEffect(() => {
		if (fundingRounds.length > 0) {
			setCompanyValuation(newFundinground.valuation);
		}
	}, [fundingRounds]);

	return (
		<main className=" bg-black p-4 text-white">
			<section className=" max-w-5xl mx-auto">
				<Card>
					<h2 className=" text-xl font-semibold">Company Shares & Equity Calculator</h2>
				</Card>
				<div className=" grid lg:grid-cols-5 lg:gap-8">
					<div className=" lg:col-span-2">
						<Card>
							<div className=" space-y-4">
								<h3 className=" text-lg font-semibold mb-4">Company Profile</h3>
								<div className=" space-y-2">
									<h4> Dummy Name:</h4>
									<p className=" text-lg font-bold">Founders Hub</p>
								</div>

								<div className=" space-y-2">
									<h4>Founders:</h4>
									<p className=" text-lg font-bold">{founders.length} founder(s)</p>
								</div>

								<div className=" space-y-2">
									<h4>Total Shares:</h4>
									<p className=" text-2xl font-bold">{numberWithSpaces(totalCompanyShares)}</p>
								</div>

								<div className=" space-y-2">
									<h4>Share price:</h4>
									<p className=" text-2xl font-bold">$ {companySharePrice}</p>
								</div>

								<div className=" space-y-2">
									<h4>Valuation:</h4>
									<p className=" text-2xl font-bold">${numberWithSpaces(companyValuation.toFixed(2))}</p>
								</div>
							</div>
						</Card>
					</div>

					<div className=" lg:col-span-3">
						<Card>
							<div className=" grid grid-cols-2 gap-x-6">
								<Button text="Add Founder" onClick={() => setShowAddFounder(!showAddFounder)} />
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
									<button
										onClick={() => setCurrentTab("founders")}
										className={` p-3 ${
											currentTab === "founders"
												? "border-b-4 border-purple-600 text-lg text-purple-500 font-semibold"
												: ""
										}`}
									>
										Founders
									</button>
									<button
										onClick={() => setCurrentTab("funding")}
										className={` p-3 ${
											currentTab === "funding"
												? "border-b-4 border-purple-600 text-lg text-purple-500 font-semibold"
												: ""
										}`}
									>
										Funding Rounds
									</button>
								</div>
								<div>
									{currentTab === "founders" && (
										<FoundersList
											founders={founders}
											eachFoundersShares={eachFoundersShares}
											eachFoundersStake={eachFoundersStake}
											eachFoundersNetWorth={eachFoundersNetWorth}
											removeFounder={handleRemoveFounder}
										/>
									)}
									{currentTab === "funding" && (
										<FundingRoundsList fundingRounds={fundingRounds} removeFundingRound={handleRemoveFundingRound} />
									)}
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>
		</main>
	);
}
